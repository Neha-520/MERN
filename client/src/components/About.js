import React from 'react'

export const About = () => {
    return (
        <>
            <div className="container emp-profile p-5" style={{ marginTop: "40px", boxShadow: "0 6px 10px -4px rgb(0 0 0 / 0.2)" }}>
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <div children="profile-img">
                                {/* src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMQkj6_gQi5y_VcfXdbuGyhd4XmlVHuAjgw&usqp=CAU" */}
                                <img src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" style={{ width: "190px", height: "200px", objectFit: "contain" }} alt="neha" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>Neha Garg</h5>
                                <h6 style={{ color: "blue" }}>Web Developer</h6>
                                <p className="profile-rating mt-3 mb-5 " style={{ color: "gray" }}>
                                    RANKINGS : <span>1/10</span>
                                </p>

                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile">Timeline</a>
                                    </li>

                                </ul>

                            </div>
                        </div>

                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work" style={{ marginTop: "20px" }}>
                                <p style={{ color: "gray" }}>WORK LINK</p>
                                <a href="https://www.linkedin.com/in/neha-garg-506700200/" target="_blank">Linked In</a><br />
                                <a href="https://www.instagram.com/neha._.garg._/" target="_blank">Instagram</a><br />
                                <a href="https://mtouch.facebook.com/profile.php" target="_blank"> Facebook</a><br />
                                <a href="https://twitter.com/home" target="_blank"> Twitter</a><br />
                                <a href="https://github.com/Neha-520" target="_blank"> Web Developer</a><br />
                                <a href="https://github.com/Neha-520" target="_blank">Github</a><br />
                            </div>
                        </div>
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>1910923487</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Neha Garg</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>neha17@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>7888345434</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label >Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
