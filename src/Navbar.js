import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <span className="navbar-brand h1 pl-3 mb-0">Assistant</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/features" class="nav-link">
              Features
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to="/createAccount" class="nav-link">
              Create Account
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login" class="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <img
    //     src={logo}
    //     width="30"
    //     height="30"
    //     className="d-inline-block align-top"
    //     alt=""
    //   />
    //   <span className="navbar-brand mb-0 h1 pl-3">Assistant</span>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavAltMarkup"
    //     aria-controls="navbarNavAltMarkup"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <div className="navbar-nav">
    //       <Link to="/" className="nav-item nav-link active">
    //         Home <span className="sr-only">(current)</span>
    //       </Link>
    //       <Link to="/features" className="nav-item nav-link">
    //         Features
    //       </Link>
    //       <Link to="/contact" className="nav-item nav-link">
    //         Contact
    //       </Link>
    //       <Link to="/createAccount" className="nav-item nav-link">
    //         Create Account
    //       </Link>
    //       <Link to="/login" className="nav-item nav-link navbar-right">
    //         Login
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
