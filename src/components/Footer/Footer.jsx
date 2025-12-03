import { Link } from "react-router";
import "./Footer.css";


function Footer() {
  return (
    <div className="footer">
      <p>If you are experiencing an emergency, please contact 911 or local emergency services</p>
      <p className="footer-credit">Created by Sara Mattina & Dylan Tai</p>
         <p>
        <Link to="/privacy-policy" className="footer-link">
          Privacy Policy
        </Link>
      </p>
      </div>
  )
}

export default Footer