import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./components/Contact";
import { Error404 } from "./components/Error404";
import About from "./components/AboutClass";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const CategorayId = lazy(() => import("./components/Categoray-Id"));
// import CategorayId from "./components/Categoray-Id";

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

//implementing child compoenents

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="overflow-y-scroll  h-screen w-screen body ">
        <Header />
        {/* header should be rendered for every page  */}
        <userContext.Provider
          value={{
            name: " sumanth ",
          }}
        >
          <Outlet />
        </userContext.Provider>
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// const Route = createBrowserRouter([
//   { path: "/", element: <AppLayout />, errorElement: <Error404 /> },
//   { path: "/contact", element: <Contact /> },
// ]);

//implementing child compoenents
const Route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Body /> },
      { path: "contact", element: <Contact /> },
      {
        path: "about",
        element: <About name={"Hemanth Udupa"} role={"Software Developer"} />,
      },
      {
        path: "category/:id",
        element: (
          <Suspense fallback={<h1>WAIT THE CONTENT IS LOADING</h1>}>
            <CategorayId />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
root.render(<RouterProvider router={Route} />);
