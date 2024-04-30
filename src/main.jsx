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
import SpotDetails from './components/SpotDetails/SpotDetails.jsx';
import Update from './components/Update/Update.jsx';
import TouristSpots from './components/TouristSpots/TouristSpots.jsx';
import CountryInfo from './components/Countries/CountryInfo.jsx';


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
      },
      {
        path:'/spot/:id',
        element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path:'/updatespot/:id',
        element:<Update></Update>,
        loader: ({params})=> fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path:'/touristspots',
        element:<TouristSpots></TouristSpots>,
        loader: ()=> fetch('http://localhost:5000/spots')
      },
      {
        path:'/country/:country',
        element:<CountryInfo></CountryInfo>,
        loader: () => fetch('http://localhost:5000/country')
      },
      // {
      //   path:'/country/:country',
      //   element:<CountryInfo></CountryInfo>,
      //   loader: ({params})=> fetch(`http://localhost:5000/spots/${params.country}`)
      // }
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
