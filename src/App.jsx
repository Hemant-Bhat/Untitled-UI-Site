import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={
            <div className="min-h-96 flex items-center justify-center">
              <h1 className="text-2xl">Page not exist</h1>
            </div>
          }
          path="*"
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
