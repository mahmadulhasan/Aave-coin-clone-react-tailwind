import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Mainbody from "./mainbody";
import Footer from "./footer";
import Navbar from "./navbar";
import Blog from "./blog";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
