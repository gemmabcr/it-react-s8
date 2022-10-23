import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Starships from "../components/Starships/Starships";
import StarshipDetail from "../components/StarshipDetail/StarshipDetail";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/starships' element={<Starships/>} />
      <Route path='/starships/:id' element={<StarshipDetail/>} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
)

export default Router;
