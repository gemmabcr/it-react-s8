import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Starships from "../components/Starships/Starships";
import StarshipDetail from "../components/StarshipDetail/StarshipDetail";
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
