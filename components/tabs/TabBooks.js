export default function TabBooks() {
    return (
        <section className="container tab-content" id="tab-2">
            <div className="row books-container justify-content-between">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="book">
                        <div className="book-top">
                            <div className="book__cover">
                                <img src="../assets/book1.jpg" alt="Book" />
                                <div className="cover__hover">
                                    <a className="cover__hover-text" href="#">
                                        <img src="../assets/icons/amazon.svg" alt="Amazon" />
                                        <p>Buy at Amazon</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="book-bottom">
                            <a className="book__name title" href="#">Changing New York</a>
                            <p className="book__number">ISBN 2-266-11156</p>
                            <a className="book__author text18">Abbott Berenice</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="book">
                        <div className="book-top">
                            <div className="book__cover">
                                <img src="../assets/book2.jpg" alt="Book" />
                                <div className="cover__hover">
                                    <a href="#" className="cover__hover-text">
                                        <img src="../assets/icons/amazon.svg" alt="Amazon" />
                                        <p>Buy at Amazon</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="book-bottom">
                            <a href="#" className="book__name title">Documenting science</a>
                            <p className="book__number">ISBN 2-266-11156</p>
                            <a href="#" className="book__author text18">Abbott Berenice</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="book">
                        <div className="book-top">
                            <div className="book__cover">
                                <img src="../assets/book3.jpg" alt="Book" />
                                <div className="cover__hover">
                                    <a href="#" className="cover__hover-text">
                                        <img src="../assets/icons/amazon.svg" alt="Amazon" />
                                        <p>Buy at Amazon</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="book-bottom">
                            <a href="#" className="book__name title">Masters of photography</a>
                            <p className="book__number">ISBN 2-266-11156</p>
                            <a href="#" className="book__author text18">Julia Van Haaften, Julia Van Haaften, Berenice Abbott</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="book">
                        <div className="book-top">
                            <div className="book__cover">
                                <img src="../assets/book4.jpg" alt="Book" />
                                <div className="cover__hover">
                                    <a href="#" className="cover__hover-text">
                                        <img src="../assets/icons/amazon.svg" alt="Amazon" />
                                        <p>Buy at Amazon</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="book-bottom">
                            <a href="#" className="book__name title">Changing New York</a>
                            <p className="book__number">ISBN 2-266-11156</p>
                            <a href="#" className="book__author text18">Abbott Berenice</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}