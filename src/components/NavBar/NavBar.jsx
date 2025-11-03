import { Link } from "react-router";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar-container">
        <Link to="/">Feelings Wheel</Link>
        <Link to="/emotional-checkin">Emotional Check-In Guide</Link>
    </div>
  )
}

export default Navbar