import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contacts";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/rjs-p16">
      <header>
        <h1>My React Website</h1>

        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/Aboutus">About Us</Link>{" "}
          <Link to="/Contactus">Contact Us</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/Contactus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;