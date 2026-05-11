

import Header from "./components/Header";
import Body from "./components/Body";
import Product from "./components/Product";

import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

import About from "./components/Routes/About.jsx";
import Contact from "./components/Routes/Contact.jsx";
import Error from "./components/Routes/Error.jsx";
import ProductInfo from "./components/ProductData/ProductInfo.jsx";
// import UserProfile from "./components/UserProfile.jsx";
import { lazy, Suspense } from "react";


const UserProfile = lazy(()=>import("./components/UserProfile.jsx"))

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
       {
        path: "/userprofile",
        element: <Suspense fallback={<h1>Loading .......</h1>} ><UserProfile /></Suspense> ,
      },
      {
        path:"/product/:barcode",
        element:<ProductInfo/>
      },
    ],
    errorElement: <Error />,
  },
]);

export default Applayout;
