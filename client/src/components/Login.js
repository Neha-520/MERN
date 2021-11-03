import React from 'react'
import { NavLink } from 'react-router-dom'

export const Login = () => {
    return (
        <>
            <div className="x">
                <section className="sign-in">
                    <div className="container mt-5">
                        <div className="signin-content  p-lg-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="signin-image">
                                <figure>
                                    <img src="/login1.jpg" style={{ width: "280px", height: "300px", objectFit: "contain" }} alt="Login pic"></img>
                                </figure>
                                <NavLink to="/signup" className="signup-image-link">Create account</NavLink>
                            </div>
                            <div className="signin-form">
                                <h2 className="form-title ">Sign In</h2>
                                <form className="register-form" id="reguster-form">

                                    <div className="form-group">
                                        <label htmlFor="email">
                                            <i className="zmdi zmdi-email material-icons-name"></i>
                                        </label>
                                        <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email"></input>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">
                                            <i className="zmdi zmdi-lock material-icons-name"></i>
                                        </label>
                                        <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password"></input>
                                    </div>

                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit" value="Log In"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
