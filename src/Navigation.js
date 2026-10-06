import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Aboutus">About Us</Link>
      <Link to="/Contactus">Contact Us</Link>
    </nav>
  );
}

export default Navigation;