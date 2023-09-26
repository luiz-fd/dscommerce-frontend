import "./styles.css";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "GOOD",
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources-devsuperior/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
      id: 1,
      name: "Eletrônicos",
    },
    {
      id: 2,
      name: "Computadores",
    },
  ],
};

export default function ProductDetails() {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product}></ProductDetailsCard>
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar"></ButtonPrimary>
          <ButtonInverse text="Inicio"></ButtonInverse>
        </div>
      </section>
    </main>
  );
}
