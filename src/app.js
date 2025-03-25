import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./components/Contact";
import { Error404 } from "./components/Error404";
import About from "./components/AboutClass";

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
    <div className="overflow-hidden  h-full w-screen body ">
      <Header />
      {/* header should be rendered for every page  */}
      <Outlet />
    </div>
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
            <CategorayId  />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(<RouterProvider router={Route} />);
