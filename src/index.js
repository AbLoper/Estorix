import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reduxToolkit/store';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import routes from './routes';

// استيراد مكون الـ Navbar
import Navbar from './components/navbar/Navbar.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      {/* إضافة الـ Navbar هنا ليظهر فوق جميع الصفحات */}
      <Navbar />

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>
);
