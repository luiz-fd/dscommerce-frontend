import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import axios from "axios";

export default function ProductDetails() {

const params = useParams();
const [product, setProduct] = useState<ProductDTO>();

useEffect(() => {
  axios.get("http://localhost:8080/products/2")
  .then(response => {
    console.log(response);
    setProduct(response.data);
  });



},[]);


  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product}></ProductDetailsCard>}
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar"></ButtonPrimary>
          <Link to="/"><ButtonInverse text="Inicio"></ButtonInverse></Link>
          
        </div>
      </section>
    </main>
  );
}
