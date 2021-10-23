import React from 'react'
import { NavLink } from 'react-router-dom'

export const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content p-lg-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form" id="reguster-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Your Email"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" autoComplete="off" placeholder="Your Phone Number"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autoComplete="off" placeholder="Your Profession"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" placeholder="Your Password"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Your Password"></input>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"></input>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure>
                                <img alt="registration pic"></img>
                            </figure>
                            <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
