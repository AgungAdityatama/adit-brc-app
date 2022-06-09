import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Cari from "./pages/Cari/Cari";
import Hasil from "./pages/Hasil/Hasil";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cari" element={<Cari />} />
        <Route path="/cari/hasil" element={<Hasil />} />
        <Route path="/cari/hasil/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
