import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Contact from "./components/Contact";
import { Error404 } from "./components/Error404";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const Route = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <Error404 /> },
  { path: "/contact", element: <Contact /> },
]);
root.render(<RouterProvider router={Route} />);
