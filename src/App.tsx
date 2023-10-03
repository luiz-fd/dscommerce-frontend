import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClientHome from "./routes/ClientHome";
import Catalog from "./routes/ClientHome/Catalog";
import Cart from "./routes/ClientHome/Cart";
import { useState } from "react";
import { ContextCartCount } from "./utils/context-cart";

function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(0);

  return (
    <ContextCartCount.Provider value={{contextCartCount, setContextCartCount}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientHome></ClientHome>}>
            <Route index element={<Catalog></Catalog>}></Route>
            <Route path="catalog" element={<Catalog></Catalog>}></Route>
            <Route
              path="product-details/:productId"
              element={<ProductDetails></ProductDetails>}
            ></Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/"></Navigate>} />
        </Routes>
      </BrowserRouter>
    </ContextCartCount.Provider>
  );
}

export default App;
