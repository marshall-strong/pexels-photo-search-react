import React from "react";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
