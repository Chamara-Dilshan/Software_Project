import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import RoleNav from "./RoleNav";

const Header = () => {
  return (
    <div>
    
      <nav className="navbar  navbar-expand-lg custom-bg text-color">
        <div className="container-fluid text-color">

        <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          <Link to="/" className="navbar-brand">
            <i>
              <b className="text-color5">TRAVO |</b>
            </i>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/home" className="navbar-brand">
            <i>
              <b className="text-color5"> Hotels |</b>
            </i>
          </Link>

          <button
            
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        

          <button
            
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/TripPlanner"
                  className="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color5">Trip Planner |</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color5">Contact Us |</b>
                </Link>
              </li>
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
