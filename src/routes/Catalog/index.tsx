import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "GOOD",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources-devsuperior/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories:[
    {
      id:1,
      name:"Eletrônicos"
    },
    {
      id:2,
      name:"Computadores"
    }
  ]
}

export default function Catalog() {
  return (
    <>
      <HeaderClient></HeaderClient>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar></SearchBar>
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
            <CatalogCard product={product}></CatalogCard>
          </div>
          <ButtonNextPage></ButtonNextPage>          
        </section>
      </main>
    </>
  );
}
