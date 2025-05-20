import React from 'react'
import logo from "../assets/images/logo1.png"
import { Link } from 'react-router'
const Header = () => {
  return (
    
        <>
           <div className="container-fluid">
             {/* top navbar start*/}
             <div className="row">
                <div className="col-sm-12 p-0">
                <nav className="navbar navbar-expand-lg bg-warning">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <i className="fa-solid fa-house" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">
                            About |
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/policy">
                            Policy |
                            </Link>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <Link
                            className="nav-link dropdown-toggle"
                            to="/"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            Langaugues
                            </Link>
                            <ul
                            className="dropdown-menu dropdown-menu-dark"
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                            <li>
                                <Link className="dropdown-item" to="#">
                                Hindi
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">
                                English
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">
                                Others
                                </Link>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
            </div>
            {/* top navbar end*/}
            {/*navbar start*/}
            <div className="row">
                <div className="col-sm-3">
                <img src={logo} alt="" />
                </div>
                <div className="col-sm-9 ">
                <nav className="navbar navbar-expand-lg bg-light ">
                    <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto ">
                        <li className="nav-item text-warning">
                            <Link className="nav-link active" to="/login">
                            My Account
                            </Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link active" to="/contact">
                            Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/login">
                            <i className="fa-solid fa-user mx-2" />
                            Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/register">
                            <i className="fa-solid fa-briefcase mx-2" />
                            Registrations
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                </div>
            </div>
           </div>
        </>
  )
}

export default Header
