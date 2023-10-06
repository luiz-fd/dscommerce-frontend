import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClientHome from "./routes/ClientHome";
import Catalog from "./routes/ClientHome/Catalog";
import Cart from "./routes/ClientHome/Cart";
import { useEffect, useState } from "react";
import { ContextCartCount } from "./utils/context-cart";
import Login from "./routes/ClientHome/Login";
import AdminHome from "./routes/Admin/AdminHome";
import Admin from "./routes/Admin";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "./utils/history";
import { PrivateRoute } from "./components/PrivateRoute";
import { AccessTokenPayloadDTO } from "./models/auth";
import { ContextToken } from "./utils/context-token";
import * as authService from "./services/auth-service";
import * as cartService from "./services/cart-service";
import Confirmation from "./routes/ClientHome/Confirmation";

function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);
  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();


  useEffect(() => {
    setContextCartCount(cartService.getCart().items.length);
    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);
  return (
    <ContextToken.Provider
      value={{ contextTokenPayload, setContextTokenPayload }}
    >
      <ContextCartCount.Provider
        value={{ contextCartCount, setContextCartCount }}
      >
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<ClientHome></ClientHome>}>
              <Route index element={<Catalog></Catalog>}></Route>
              <Route path="catalog" element={<Catalog></Catalog>}></Route>
              <Route
                path="product-details/:productId"
                element={<ProductDetails></ProductDetails>}
              ></Route>
              <Route path="cart" element={<Cart></Cart>}></Route>
              <Route path="login" element={<Login></Login>}></Route>
              <Route
                path="confirmation/:orderId"
                element={<Confirmation />}
              ></Route>
            </Route>
            <Route
              path="/admin/"
              element={
                <PrivateRoute roles={["ROLE_ADMIN"]}>
                  <Admin />
                </PrivateRoute>
              }
            >
              <Route index element={<AdminHome></AdminHome>}></Route>
            </Route>
            <Route path="*" element={<Navigate to="/"></Navigate>} />
          </Routes>
        </HistoryRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}

export default App;
