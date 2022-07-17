import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img
        src={logo}
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      <span class="navbar-brand mb-0 h1 pl-3">Assistant</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/" class="nav-item nav-link active">
            Home <span class="sr-only">(current)</span>
          </Link>
          <Link to="/features" class="nav-item nav-link">
            Features
          </Link>
          <Link to="/contact" class="nav-item nav-link">
            Contact
          </Link>
          <Link to="/createAccount" class="nav-item nav-link ">
            Create Account
          </Link>
          <Link to="/login" class="nav-item nav-link ">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
