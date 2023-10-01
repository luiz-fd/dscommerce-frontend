import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as productService from "../../../services/product-service";
import * as cartService from "../../../services/cart-service";

export default function ProductDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        console.log(response);
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  function handleByClick() {
    if (product) {
      cartService.addProduct(product);
      navigate('/cart');
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product}></ProductDetailsCard>}
        <div className="dsc-btn-page-container">
          <div onClick={handleByClick}>
            <ButtonPrimary text="Comprar"></ButtonPrimary>
          </div>

          <Link to="/">
            <ButtonInverse text="Inicio"></ButtonInverse>
          </Link>
        </div>
      </section>
    </main>
  );
}
