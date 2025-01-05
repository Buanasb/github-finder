import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:login" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
