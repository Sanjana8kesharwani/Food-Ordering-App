
import { Link } from "react-router-dom";
import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grocery from "./components/Grocery";
import FoodDeliveryPage from "./components/FoodDeliveryPage"; 
import InstamartPage from "./components/InstamartPage";
import DineoutPage from "./components/DineoutPage";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

//const Grocery = lazy(() => import("./components/Grocery"));


<Routes>
  <Route path="/grocery" element={<Grocery />} />
  <Route path="/grocery/food-delivery" element={<FoodDeliveryPage />} />
  <Route path="/login" element={<Login />} />
</Routes>



const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
    path: "/about",
    element:<About />,
  },
  {
    path: "/contact",
    element:<Contact />,
  },
  {
    path: "/grocery",
    element:<Suspense fallback ={<h1> Loading...</h1>}>
      <Grocery />
      </Suspense>,
  },
  {
    path: "/cart",
    element:<Cart />
  },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />,
  },
  {
  path: "/grocery/food-delivery",
  element: <FoodDeliveryPage />,
},
{
        path: "/grocery/instamart",
        element: <InstamartPage />,
      },
      {
  path: "/grocery/dineout",
  element: <DineoutPage />,
},
{
  path: "/login",
  element: <Login />,
},
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


