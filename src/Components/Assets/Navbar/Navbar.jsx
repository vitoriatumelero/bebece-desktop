import React, { useState, useContext } from 'react';
import './Navbar.css';
import logobranco from '../Assets/logo-branco.png';
import cart_icon from '../Assets/icone-carrinho.png';
import search_icon from '../Assets/icone-search.png';
import profile_icon from '../Assets/icone-conta.png';
import sapatoImg from '../Assets/Banner Principal 2.png';
import scarpinImg from '../Assets/scarpinimage.png';
import sandaliaImg from '../Assets/sandaliaimage.png';
import botaImg from '../Assets/botaimage.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const categories = [
    { name: 'Sapatos', image: sapatoImg },
    { name: 'Scarpins', image: scarpinImg },
    { name: 'Sandálias', image: sandaliaImg },
    { name: 'Botas', image: botaImg },
  ];

  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <img src={logobranco} alt="Logo Bebecê" />
        </div>
        <ul className="nav-menu">
          <li className="dropdown">
            Produtos
            <div className="dropdown-menu">
              <div className="dropdown-categories">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="category-item"
                    onMouseEnter={() => setHoveredCategory(category.image)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {category.name}
                  </div>
                ))}
              </div>
              <div className="dropdown-preview">
                {hoveredCategory && (
                  <img src={hoveredCategory} alt="Categoria" className="preview-image" />
                )}
              </div>
            </div>
          </li>
          <li>
            <a href="#lancamentos" style={{ textDecoration: 'none', color: 'inherit' }}>
              lancamentos
            </a>
          </li>
          <li>
            <Link to="outlet" style={{ textDecoration: 'none' }}>Outlet</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search_icon} alt="Pesquisa" className="nav-icon" />
        <Link to="perfil">
          <img src={profile_icon} alt="Perfil" className="nav-icon" />
        </Link>
        <Link to="/carrinho">
          <div className="nav-cart">
            <img src={cart_icon} alt="Carrinho" className="nav-icon" />
            <span className={`cart-count ${cartItems.length > 0 ? 'show' : ''}`}>
              {cartItems.length}
            </span>
          </div>
        </Link>


      </div>
    </div>
  );
};

export default Navbar;
