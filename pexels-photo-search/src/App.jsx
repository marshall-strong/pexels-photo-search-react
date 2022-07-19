import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Search from "./Search";
import Gallery from "./Gallery";
import Footer from "./Footer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
