// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './app.css'
// import store from './reduxToolkit/store';
// import routes from './routes';
// import Navbar from './components/navbar/Navbar'
// export default function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
//         <Navbar />
//         <Routes>{routes.map((route, index) => (
//           <Route key={index} path={route.path} element={route.element} />
//         ))}
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   )
// }

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './app.css';
import { PersistGate } from 'redux-persist/integration/react';  // استيراد PersistGate
import { store, persistor } from './reduxToolkit/store';  // استيراد store و persistor
import routes from './routes';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <PersistGate loading={null} persistor={persistor}>
          {/* تأجيل الرندر حتى يتم تحميل البيانات المخزنة */}
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}
