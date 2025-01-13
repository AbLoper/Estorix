import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './reduxToolkit/store';
import './styles/mediaQuery.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Login from './pages/login';
import Register from './pages/register';
import ContactUs from './pages/contactus';
import Cart from './pages/cart';
import About from './pages/about';
// import Checkout from './pages/checkout';
import Product from './pages/product';
import NotFound from './pages/notFound';
import App from './App';
import NavbarApp from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  // </Provider>
);
