import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './Component/Layout/RoutLayout';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Service from './pages/Service';
import Portefolio from './pages/Portefolio';
import About from './pages/About';
import Contact from './pages/Contact';

// On définit le router à l'extérieur pour éviter de le recréer à chaque rendu
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> }, // "index: true" est plus propre pour la racine
      { path: "service", element: <Service /> },
      { path: "portefolio", element: <Portefolio /> },
      { path: "About", element: <About /> },
      { path: "contact", element: <Contact/> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;