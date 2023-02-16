
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';
import Nav from './components/Nav/Nav';
import Gig from './pages/gig/Gig';
import Add from './pages/add/Add';
import Gigs from './pages/gigs/Gigs';
import Messages from './pages/messages/Messages';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import './App.scss'
  



function App() {

  const Layout = () => {
    
      return (
        <div className="app">
        <Nav/>
      <Outlet/>
      <Footer/>
    </div>
      )
      
  }

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/gig',
          element:<Gig/>
        },
        {
          path:'gigs',
          element:<Gigs/>
        },
        {
          path:'/message',
          element:<Messages/>
        },
        {
          path:'/add',
          element:<Add/>
        },
      ]
    }
  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
