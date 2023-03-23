import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.jpg";

const NavBar = () => {
    return(
        <div className="container" id="navbar">
            <div className="row">
                        <div className="col-6">
                            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to={"/"}><img src={logo} alt="Logo" width={100} /></Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <button type="button" class="btn btn-warning  mx-2">
                                        <NavLink className="nav-link" aria-current="page" to={"/category/aros"} >Aros</NavLink>
                                        </button>
                                        <button type="button" class="btn btn-warning  mx-2">
                                        <NavLink className="nav-link" to={"/category/pulseras"}>Pulseras</NavLink>
                                        </button>
                                        <button type="button" class="btn btn-warning mx-2">
                                        <NavLink className="nav-link" to={"/category/anillos"}>Anillos</NavLink>
                                        </button>
                                        
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-6 d-flex justify-content-end  align-items-center">
                            <CartWidget/>
                        </div>        
            </div>
        </div>
        
            
    )
}

export default NavBar;