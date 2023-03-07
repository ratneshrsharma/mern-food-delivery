import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import Home from './pages/Home';
import AppRouter from './utils/AppRouter';


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
