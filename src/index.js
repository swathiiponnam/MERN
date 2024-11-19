import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
import ErrorPage from './pages/ErrorPage';
import Body from './component/Body';
import Swiggy from './component/Swiggy';
import MenuInfo from './pages/MenuInfo';
import ShimmerCard from './commonComponents/ShimmerCard';
import Cart from './pages/Cart';
import Login from './commonComponents/Login';

const AboutUs = lazy(()=>import("./pages/AboutUs"))
const ContactUs = lazy(()=>import("./pages/ContactUs"))
const root = ReactDOM.createRoot(document.getElementById('root'));

const reactRout = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    errorElement : <ErrorPage/>,
    children :[
      {
        path : '/',
        element : <Body/>
      },
      {
        path : '/swiggy',
        element: <Swiggy/>,
        
      },
      {
        path :'/menuinfo/:id',
        element :<MenuInfo/>
      },
      {
        path : '/aboutus',
        element : <Suspense fallback={<h1>...Loding your page,plz wait</h1>}><AboutUs/></Suspense>
      },
      {
        path : '/contactus',
        element : <Suspense fallback={<ShimmerCard/>}><ContactUs/></Suspense>
      },
      {
        path : '/cart',
        element : <Cart/>
      },
      {
        path : '/login',
        element : <Login/>
      }


    ]
  }
  
])

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={reactRout}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
