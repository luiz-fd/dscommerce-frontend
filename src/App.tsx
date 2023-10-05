import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClientHome from "./routes/ClientHome";
import Catalog from "./routes/ClientHome/Catalog";
import Cart from "./routes/ClientHome/Cart";
import { useState } from "react";
import { ContextCartCount } from "./utils/context-cart";
import Login from "./routes/ClientHome/Login";
import AdminHome from "./routes/Admin/AdminHome";
import Admin from "./routes/Admin";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "./utils/history";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
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
          </Route>
          <Route path="/admin/" element={<PrivateRoute><Admin /></PrivateRoute>}>
            <Route index element={<AdminHome></AdminHome>}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/"></Navigate>} />
        </Routes>
      </HistoryRouter>
    </ContextCartCount.Provider>
  );
}

export default App;
