import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";

export default function AppRouter() {
  const isAuth = true;

  const { user, product } = useContext(Context);
  //console.log(user);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />}></Route>
        ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}

      {/* <Route path='*' element={<Navigate to='/'/>}/> */}
    </Routes>
  );
}
