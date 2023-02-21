
import Home from './pages/Home/Home';
import Footer from './components/footer/Footer';
import Nav from './components/Nav/Nav';
import Gig from './pages/gig/Gig';
import Add from './pages/add/Add';
import Gigs from './pages/gigs/Gigs';
import Messages from './pages/messages/Messages';
import {createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import './App.scss'
import MyGig from './pages/mygig/MyGig';
import Orders from './pages/orders/Orders';
  import Message from './pages/message/Message';



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
          path:'/gig/:id',
          element:<Gig/>
        },
        {
          path:'gigs/:id',
          element:<Gigs/>
        },
        {
          path:'/messages',
          element:<Messages/>
        },
        {
          path:'/add',
          element:<Add/>
        },
        {
          path:'/mygig',
          element:<MyGig/>
        },
        {
          path:'/orders',
          element:<Orders/>
        },
        {
          path:'/message/:id',
          element:<Message/>
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
