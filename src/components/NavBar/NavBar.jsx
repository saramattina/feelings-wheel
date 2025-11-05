import { Link } from "react-router";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import logo from "/FeelingsWheelLogo.jpg";
import "./NavBar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <div className="navbar-container">
      <div className="logo-section">
        <Link to="/">
          <img
            src={logo}
            alt="logo showing color wheel with smiley face"
            className="logo-img"
          />
          <span className="logo-text">Feelings Wheel</span>
        </Link>
      </div>

    {/* hamburger menu for mobile */}
      <div className="hamburger-wrapper">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>


      <div className={`links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>Feelings Wheel</Link>
        <Link to="/emotional-checkin" onClick={handleLinkClick}>Emotional Check-In Guide</Link>
      </div>
    </div>
  );
}

export default Navbar;
