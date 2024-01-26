import React from "react";
import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar_navigation">
                <div className="logo">
                    <a href="">
                        <img
                            src={logoSpotify}
                            alt="Logo do Spotify"
                        />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span> <FontAwesomeIcon icon={faHome} /></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span> <FontAwesomeIcon icon={faSearch} /></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span><FontAwesomeIcon icon={faBook} /></span>
                        <span>Sua Biblioteca</span>
                    </button>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </div>

                <div className="suggestions">
                    <section className="section-playlist">
                        <div className="section-playlist__content">
                            <span className="text title">Crie sua primeira playlist</span>
                            <span className="text subtitle">É fácil, vamos te ajudar</span>
                            <button className="section-playlist__button">
                                <span>Criar playlist</span>
                            </button>
                        </div>
                    </section>

                    <section className="section-podcast">
                        <div className="section-podcast__content">
                            <span className="text title">Que tal seguir um podcast novo?</span>
                            <span className="text subtitle">Avisaremos você sobre novos episódios.</span>
                            <button className="section-podcast__button">
                                <span>Explore podcasts</span>
                            </button>
                        </div>
                    </section>
                </div>

                <div className="policies">
                    <a href="">Legal</a>
                    <a href="">Centro de Privacidade</a>
                    <a href="">Política de privacidade</a>
                    <a href="">Cookies</a>
                    <a href="">Sobre anúncios</a>
                    <a href="">Acessibilidade</a>
                    <a href="">Notice at Collection</a>
                    <a href="">Your Privacy Choices</a>
                </div>

                <div className="cookies">
                    <a href="">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;