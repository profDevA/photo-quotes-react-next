import React from 'react';

const Footer = () => {
    return (
        <footer className="footer container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-4 footer-bg">
                        <ul className="list-links__white">
                            <li><a href="">Authors</a></li>
                            <li><a href="">Topics</a></li>
                            <li><a href="">Quote of the Day</a></li>
                            <li><a href="">Random Quotes</a></li>
                            <li><a href="">Photo Quotes</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-9 col-8 footer-right">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <ul className="list-links__white">
                                    <li><a href="">Photography on Stamps</a></li>
                                    <li><a href="">Create Photo Books Online</a></li>
                                    <li><a href="">Quotes for Your Website</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-12">
                                <ul className="list-links__white">
                                    <li><a href="">Computer Quotes</a></li>
                                    <li><a href="">Phote Workshop in Iceland</a></li>
                                    <li><a href="">About PhotoQuotes</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-12">
                                <ul className="list-links__white">
                                    <li><a href="">Add Quotes</a></li>
                                    <li><a href="">Advertise</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-10 footer-icons">
                                <a href=""><span className="icon-fb"></span></a>
                                <a href=""><span className="icon-insta"></span></a>
                                <a href=""><span className="icon-twi"></span></a>
                                <a href=""><span className="icon-youtube"></span></a>
                            </div>
                            <div className="col-lg-8 col-12">
                                <form action="" className="footer-form">
                                    <label htmlFor="email" generated="true" className="error message message-top"></label>
                                    <input type="email"
                                        placeholder="Enter your email" id="email" className="white-font" name="email" />
                                    <button type="submit" className="btn-footer wide-text btn__blue-gradient">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
