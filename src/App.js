import { Divider, Layout } from 'antd';

import Carrossel from './components/Header/Carrossel.js';
import './App.css';
import CardNews from './components/Content/CardNews.js';
import FullEvento from './components/Content/FullEvento.js';
import Visitacao from './components/Content/Visitacao.js';
import Bilheteria from './components/Content/Bilheteria.js';
import Frame from './components/Content/Frame.js';
import FooterComponent from './components/Footer/FooterComponent.js';
import MenuAll from './components/MenuAll.js';

const { Header, Footer, Content } = Layout;

const contentStyle = {
  minHeight: 'calc(100vh - 160px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
};

const footerStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor: '#cdd8d8',
};

const headerStyle = {
 backgroundColor: '#6d0202',
 lineHeight: '64px',
};


function App() {
  return (
    <Layout>
      <Header style={headerStyle}>
        <MenuAll/>
      </Header>
      <Carrossel />
      <Content style={contentStyle}>
        <Divider style={{ background: 'rgb(242, 174, 48)', borderWidth: 2 }} orientation="center">
          <h1 style={{ color: '#fff' }}>Notícias</h1>
        </Divider>
        <CardNews />
        <Divider style={{ background: 'rgb(242, 174, 48)', borderWidth: 2 }} orientation="center">
          <h1 style={{ color: '#fff' }}>Eventos</h1>
        </Divider>
        <FullEvento />
        <Divider style={{ background: 'rgb(242, 174, 48)', borderWidth: 2 }} orientation="center">
          <h1 style={{ color: '#fff' }}>Visitação</h1>
        </Divider>
        <Visitacao />
        <Divider style={{ background: 'rgb(242, 174, 48)', borderWidth: 2 }} orientation="center">
          <h1 style={{ color: '#fff' }}>Bilheteria</h1>
        </Divider>
        <Bilheteria />
        <Frame/>
      </Content>
      <Footer style={footerStyle}>
        <FooterComponent />
      </Footer>
    </Layout>
  );
}

export default App;
