import React from "react";
import {Link} from "react-router-dom";


const Nav = () => {
    return(
        <>
        <h1>Demo only</h1>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BAZAAR</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/man" className="nav-link">Man's</Link>
        </li>
        <li className="nav-item">
        <Link to="/women" className="nav-link">Women's</Link>
        </li>
        <li className="nav-item">
        <Link to="/kids" className="nav-link">Kid's</Link>
        </li>
        <li className="nav-item">
        <Link to="/goggle" className="nav-link">Goggle</Link>
        </li>
        <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <Link to="/women" className="dropdown-item">Women's</Link></li>
            <li> <Link to="/kids" className="dropdown-item">Kid's</Link></li>
            <li> <Link to="/Mobile" className="dropdown-item">Mobile</Link></li>
            <li> <Link to="/misc" className="dropdown-item">Misc</Link></li>
            <li> <Link to="/goggle" className="dropdown-item">Goggle</Link></li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>


        </>
    )
}

export default Nav