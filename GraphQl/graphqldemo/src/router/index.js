import * as React from "react";
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import CreateQuotesPage from "../components/CreateQuotesPage";
import Profile from "../components/Profile";
import Home from "../components/Home";

export const Router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/signup", element: <SignUpPage /> },
  {
    path: "/create-quotes",
    element: <CreateQuotesPage />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
];
