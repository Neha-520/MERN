import React from 'react'

export const Contact = () => {
    return (
        <>
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            <div className="contact_info_item d-flex  align-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"></img>
                                <div className="contact_info_content " style={{ marginLeft: "1rem" }}>
                                    <div className="contact_info_title">
                                        <b> Phone</b>
                                    </div>
                                    <div className="contact_info_text">
                                        +91 9878993462
                                    </div>
                                </div>
                            </div>

                            <div className="contact_info_item d-flex  align-items-center">
                                <img src="https://img.icons8.com/office/24/000000/email.png" alt="phone"></img>
                                <div className="contact_info_content" style={{ marginLeft: "1rem" }}>
                                    <div className="contact_info_title">
                                        <b> Email</b>
                                    </div>
                                    <div className="contact_info_text">
                                        neha17@gmail.com
                                    </div>
                                </div>
                            </div>

                            <div className="contact_info_item d-flex  align-items-center">
                                <img src="https://img.icons8.com/office/24/000000/address.png" alt="phone"></img>
                                <div className="contact_info_content" style={{ marginLeft: "1rem" }}>
                                    <div className="contact_info_title">
                                        <b> Address</b>
                                    </div>
                                    <div className="contact_info_text">
                                        Sunam,India
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contact_form" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-1">
                            <div className="contact_form_container py-5">
                                <div className="contact_form_title">
                                    <h3>Get In Touch</h3></div>
                                <form id="contact_form" className="mt-4">
                                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                                        <input type="text" id="contact_form_name" style={{ width: "30%" }} className="contact_form_name input_field" placeholder="Your Name" required="true">
                                        </input>

                                        <input type="email" id="contact_form_email" style={{ width: "30%" }} className="contact_form_email input_field" placeholder="Your Email" required="true">
                                        </input>

                                        <input type="number" id="contact_form_phone" style={{ width: "30%" }} className="contact_form_phone input_field" placeholder="Your Phone Number" required="true">
                                        </input>
                                    </div>

                                    <div className="contact_form_text mt-5">
                                        <textarea className="text_field contact_form_message " placeholder="Message" cols="85" rows="5"></textarea>
                                    </div>
                                    <div className="contact_form_button mt-4">
                                        <button type="submit" className="btn btn-primary ">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
