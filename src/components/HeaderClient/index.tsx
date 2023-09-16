import './styles.css'
import CartImg from '../../images/cart.svg'

export default function HeaderClient(){
    return(
<header className="dsc-header-client">
      <nav className="dsc-container">
        <h1>DSCommerce</h1>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            <div className="dsc-menu-item">
              <img src={CartImg} alt="Carrinho de compras" />
            </div>
          </div>
          <a href="#">Entrar</a>
        </div>
      </nav>
    </header>
    );
}