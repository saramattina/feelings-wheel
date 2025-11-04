import { Link } from "react-router";
import logo from "/FeelingsWheelLogo.jpg";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="logo-section">
            <Link to="/">
            <img src={logo} alt="logo showing color wheel with smiley face" className="logo-img"/>
            <span className="logo-text">Feelings Wheel</span>
            </Link>
        </div>

      <div className="links">
        <Link to="/">Feelings Wheel</Link>
        <Link to="/emotional-checkin">Emotional Check-In Guide</Link>
      </div>
    </div>
  );
}

export default Navbar;
