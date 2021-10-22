import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ml-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li class="nav-item ">
                                <NavLink className="nav-link" to="/about">About <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
