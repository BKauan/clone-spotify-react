import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
      <div className="footer__text">
        <span className="text title">Testar o Premium de graça</span>
        <span className="text subtitle"
          >Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.</span>
      </div>
      <button className="footer__button">
        <span>Inscreva-se Grátis</span>
      </button>
    </footer>
    )
}

export default  Footer;