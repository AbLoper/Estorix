import App from './App';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ContactUs from './pages/contactUs/contactus';
import Cart from './pages/cart/cart';
import About from './pages/about/about';
import Checkout from './pages/checkout/checkout';
import Product from './pages/product/product';
import PageNotFound from './pages/pageNotFound/pageNotFound';

const routes = [
    { path: "/", element: <App /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/about", element: <About /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/product", element: <Product /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/cart", element: <Cart /> },
    { path: "*", element: <PageNotFound /> },
];

export default routes;