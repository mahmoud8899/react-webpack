import React, { Fragment } from "react";
import "../css/index.css";
import Home from "./pages/Home/index.jsx";
import About from "./Pages/About/index.jsx";
import Footer from "./pages/Footer/index";
import { Route, Link, Routes,BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import NavBar from "./Pages/Navbar/index";

const App = () => {
  return (
   
     <BrowserRouter>
        <NavBar />

          <Routes>
     
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/footer" element={<Footer />} />
            <Route
              path="*"
              element={
                <div>
                  <Link to="/">callback</Link>
                </div>
              }
            />
          </Routes>
     </BrowserRouter>
  );
};

export default App;
