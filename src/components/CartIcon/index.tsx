import "./styles.css";
import CartImg from "../../images/cart.svg";

export default function CartIcon() {
  return (
    <>
        <img src={CartImg} alt="Carrinho de compras" />
        <div className="dsc-cart-count">2</div>
    </>
  );
}
