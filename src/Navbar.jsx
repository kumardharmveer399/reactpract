import React from "react";
import logo from "../src/image/ace.png"

import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <>

            <div className="container-fluid nav_bg ">
                <div className="">
                    <div className=" mx-auto">
                        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
                            <div className="container-fluid">
                                <img src={logo} width="70px" />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                              
                                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                                    <ul className="navbar-nav  mr-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="active_class" className="nav-link text-muted" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active_class" className="nav-link text-muted" to="/Magzine">Magzine</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active_class" className="nav-link text-muted" to="/Constitution">Constitution</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active_class" className="nav-link text-muted" to="/Login">Login</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle text-muted" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Features
                                            </a>

                                            <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                                                <li><NavLink className="dropdown-item text-dark my-3" to="/Department" style={{textDecoration:'none'}}>Department Details</NavLink></li>
                                                <li><NavLink className="dropdown-item text-dark my-3" to="/Team" style={{textDecoration:'none'}}>Team Details</NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className="dropdown-item text-dark my-3" to="/Blog" style={{textDecoration:'none'}}>Blogs</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active_class" className="nav-link text-muted" to="/About">About</NavLink>
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

export default Nav;