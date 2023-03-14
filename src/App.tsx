import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './component/ContextReducer';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import AppRouter from './utils/AppRouter';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter basename='/'>
          <Header />
          <div className='wrapper'>
            <AppRouter />
          </div>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
