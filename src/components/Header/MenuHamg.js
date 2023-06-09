import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menuHamb.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <span className="menu-title">Menu</span>
      <div className="menu-container">
        <Menu>
          <a className="menu-item" href="/teatro">
            O Teatro
          </a>
          <a className="menu-item" href="/institucional">
            Institucional
          </a>
          <a className="menu-item" href="/tecnico">
            Informações Técnicas
          </a>
          <a className="menu-item" href="/nmp">
            Núcleo de Memória e Pesquisa
          </a>
          <a className="menu-item" href="/nae">
            Núcleo Arte e Educação
          </a>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
