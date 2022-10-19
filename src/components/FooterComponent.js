
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <div className="footer" >
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5 >Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" style={{ color: '#d7d7d8' }}>Home</Link></li>
                            <li><Link to="/aboutus" style={{ color: '#d7d7d8' }}>About Us</Link></li>

                            <li><Link to="/contactus" style={{ color: '#d7d7d8' }}>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            <div>P.O. Box: 85570<br />
                                Dubai - U.A.E.</div>
                            <i className="fa fa-phone fa-lg"></i>:  +971 52 693 4770, +971 4 3245630<br />
                            <i className="fa fa-whatsapp fa-lg"></i>: +971 52 166 3871<br />
                            <i className="fa fa-fax fa-lg"></i>: +971 4 3245640<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href={`mailto:${'info@uaefreezones.com'}`} style={{ color: '#d7d7d8' }}>
                                info@uaefreezones.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                    <h5> <img src='images/grc.png' style={{width:100}}/>{' Corporate Services Provider'}</h5>
                        <div>
                        G R G Corporate Services Provider has always been eager to assist investors and businessmen in making a
                         reality of their goal of experiencing the most talked about business freedom in the UAE Free zones.
                        </div>
                        
                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href='https://www.facebook.com/theuaefreezones'
                            style={{ margin: 9 }}><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href='https://www.linkedin.com/company/uae-free-zones/'
                            style={{ margin: 9 }} ><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href='https://twitter.com/uaefreezone'
                            style={{ margin: 9 }}><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href='https://www.instagram.com/uae_freezones/'
                            style={{ margin: 9 }}><i className="fa fa-instagram"></i></a>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2022 Nasreen Sayed Siddig Elhussain</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer;