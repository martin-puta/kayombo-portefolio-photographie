import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './Component/Layout/RoutLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/auth/Login';
import Register from './pages/auth/Resgister';
import Deconnect from './pages/Deconnect';

// On définit le router à l'extérieur pour éviter de le recréer à chaque rendu
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }, // "index: true" est plus propre pour la racine
      { path: "product", element: <Product /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      // { path : "deconnect", element : <Deconnect/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;