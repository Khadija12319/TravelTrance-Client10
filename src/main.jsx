import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Context from './components/Context/Context.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import User from './components/User/User.jsx';
import AddSpot from './components/AddSpot/AddSpot.jsx';
import MyList from './components/MyList/MyList.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/user",
        element:<PrivateRoute><User></User></PrivateRoute>
      },
      {
        path:"/addspot",
        element:<PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path:'/mylist',
        element:<PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/spots')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
