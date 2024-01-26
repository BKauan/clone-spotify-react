import React from "react";
import './Header.css';
import smallLeft from '../../assets/icons/small-left.png';
import smallRight from '../../assets/icons/small-right.png';
import searchImg from '../../assets/icons/search.png';

const Header = () => {
    return (
        <div className="header-navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={smallLeft} alt="Seta Esquerda" />
          </button>
          <button className="arrow-right">
            <img src={smallRight} alt="Seta Direita" />
          </button>

          <div className="header__search">
            <img src={searchImg} alt="" />
            <input
              type="text"
              id="search-input"
              maxlength="800"
              placeholder="O que você quer ouvir?"
            />
          </div>

          <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
          </div>
        </div>
      </div>
    )
}

export default Header;