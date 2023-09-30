import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import { Link, useParams } from "react-router-dom";
import * as productService from "../../../services/product-service"

export default function ProductDetails() {

  const params = useParams();

const [product, setProduct] = useState<ProductDTO>();

useEffect(() => {
  productService.findById(Number(params.productId))
  .then(response => {
    console.log(response);
    setProduct(response.data);
  })
  .catch(error => {
    console.log(error.response.data);
  });

},[]);


  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product 
        ? <ProductDetailsCard product={product}></ProductDetailsCard>
        : <h2>Código inválido</h2>
      }
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar"></ButtonPrimary>
          <Link to="/"><ButtonInverse text="Inicio"></ButtonInverse></Link>
          
        </div>
      </section>
    </main>
  );
}
