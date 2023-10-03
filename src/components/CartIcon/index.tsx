import "./styles.css";
import CartImg from "../../images/cart.svg";
import { useContext } from "react";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon() {

    const {contextCartCount} = useContext(ContextCartCount)
  return (
    <>
        <img src={CartImg} alt="Carrinho de compras" />
        <div className="dsc-cart-count">{contextCartCount}</div>
    </>
  );
}
