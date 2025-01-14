// routes.js
import App from './App';
import Login from './pages/login';
import Register from './pages/register';
import ContactUs from './pages/contactus';
import Cart from './pages/cart';
import About from './pages/about';
import Checkout from './pages/checkout';
import Product from './pages/product';
import NotFound from './pages/notFound';

const routes = [
    { path: "/", element: <App /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/about", element: <About /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/product", element: <Product /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/cart", element: <Cart /> },
    { path: "*", element: <NotFound /> },
];

export default routes;
