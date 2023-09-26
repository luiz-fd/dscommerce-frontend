
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './routes/ClientHome/ProductDetails'
import ClientHome from './routes/ClientHome'
import Catalog from './routes/ClientHome/Catalog'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ClientHome></ClientHome>}>
        <Route index element={<Catalog></Catalog>}></Route>
        <Route path='catalog' element={<Catalog></Catalog>}></Route>
        <Route path='product-details' element={<ProductDetails></ProductDetails>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
