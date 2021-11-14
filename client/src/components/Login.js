import React from 'react'
import { NavLink } from 'react-router-dom'

export const Login = () => {
    return (
        <>
            <div className="x">
                <section className="sign-in">
                    <div className="container mt-4">
                        <div className="signin-content  p-5" style={{ display: "flex" }}>
                            <div className="signin-image col-7">
                                <figure>
                                    <img src="/login2.jpg" style={{ width: "400px", height: "300px", objectFit: "fit-content" }} alt="Login pic"></img>
                                </figure>
                                <center><NavLink to="/signup" className="signup-image-link ">Create account</NavLink></center>
                            </div>
                            <div className="signin-form col-5 " >
                                <h2 className="form-title mt-1">Sign In</h2>
                                <form className="register-form mt-2" id="reguster-form">

                                    <div className="form-group mt-5">
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

                                    <div className="form-group form-button mt-4">
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
