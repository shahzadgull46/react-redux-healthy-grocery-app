import Header from "./components/Header";
import Body from "./components/Body";
import Product from "./components/Product";

import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

// import About from "./components/Routes/About.jsx";
import Contact from "./components/Routes/Contact.jsx";
import Error from "./components/Routes/Error.jsx";
import ProductInfo from "./components/ProductData/ProductInfo.jsx";
// import UserProfile from "./components/UserProfile.jsx";
import { lazy, Suspense, useEffect, useState } from "react";

import UserContext from "../public/utils/userContext.jsx";
import { Provider } from "react-redux";
import appStore from "../public/utils/store/appStore.jsx";
import GroceryList from "../public/utils/store/GroceryList.jsx";

const UserProfile = lazy(() => import("./components/UserProfile.jsx"));
const About = lazy(() => import("./components/Routes/About.jsx"));

const Applayout = () => {
  const [userName, setuserName] = useState();
  useEffect(() => {
    // We make an api call and fetched name and user info
    const data = {
      name: "Shahzad Gull",
    };
    setuserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setuserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
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
        path: "/grocery",
        element: <GroceryList />,
      },
      {
        path: "/userprofile",
        element: (
          <Suspense fallback={<h1>Loading .......</h1>}>
            <UserProfile />
          </Suspense>
        ),
      },
      {
        path: "/product/:barcode",
        element: <ProductInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default Applayout;
