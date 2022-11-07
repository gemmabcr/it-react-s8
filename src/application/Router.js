import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Starships from "../pages/Starships/Starships";
import StarshipDetail from "../pages/StarshipDetail/StarshipDetail";
import PageLayout from "./PageLayout";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route path='/' element={<Home/>} />
        <Route path='/starships' element={<Starships/>} />
        <Route path='/starships/:id' element={<StarshipDetail/>} />
        <Route path='*' element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Router;
