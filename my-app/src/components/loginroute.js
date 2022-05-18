import React from "react";
import Login from "./login";

export default function LoginRoute({ component: Component }) {
  const userId = JSON.parse(window.localStorage.getItem("userData"))?.idUser;
  return userId ? <Component /> : <Login />;
}