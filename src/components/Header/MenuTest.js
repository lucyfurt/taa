import React, { useState } from 'react';
import { Row, Col, Menu } from 'antd';

const items = [
  {
    label: (
      <a href="/teatro" target="_blank" rel="noopener noreferrer">
        O Teatro
      </a>
    ),
    key: 'taa',
  },
  {
    label: (
      <a href="/institucional" target="_blank" rel="noopener noreferrer">
        Institucional
      </a>
    ),
    key: 'institucional',
  },
  {
    label: (
      <a href="/tecnico" target="_blank" rel="noopener noreferrer">
        Informações Técnicas
      </a>
    ),
    key: 'institucional',
  },
  {
    label: (
      <a href="/allevents" target="_blank" rel="noopener noreferrer">
        Próximos eventos
      </a>
    ),
    key: 'events',
  },
  {
    label: (
      <a href="/pautas" target="_blank" rel="noopener noreferrer">
        Pautas
      </a>
    ),
    key: 'pautas',
  },
  {
    label: (
      <a href="/nmp" target="_blank" rel="noopener noreferrer">
        Núcleo de Memória e Pesquisa
      </a>
    ),
    key: 'nmp',
  },
];

const App = () => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Row align="middle">
      <Col span={4}>
        <img src="https://i.ibb.co/kJhYxVW/logo.png" alt="Logo" style={{ width: '60px' }} />
      </Col>
      <Col span={20}>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="menu-right" // Adiciona a classe CSS "menu-right"
          style={{ backgroundColor: '#6d0202' }}
        >
          {items.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            );
          })}
        </Menu>

      </Col>

    </Row>
  );
};

export default App;