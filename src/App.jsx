import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import NavBar from "./components/Navbar";

import Home from "./components/Pages/Home";
import Films from "./components/Pages/Films";
import People from "./components/Pages/People";
import FilmSpec from "./components/Pages/FilmSpec";
import Person from "./components/Pages/Person";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:filmspec" element={<FilmSpec />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:person" element={<Person />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
