import './App.css'
import MainNavigation from './Component/UI/MainNavigation'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RoutLayout from './Component/Layout/RoutLayout';


function App() {

  const router = createBrowserRouter ([
    {
      path : "/",
      element :<RoutLayout/>
    }
  ])



  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
