import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import AppRouter from './utils/AppRouter';
// import { RouterConfig } from './config/RouterConfig';

function App() {
  return (
    <>
      <BrowserRouter basename='/'>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
