import Header from '../components/header'
import Footer from '../components/footer'

export default function AddQuote() {
    return (
        <>
            <Header />
            <main>
                <section className="container pt80 pb70">
                    <div className="row">
                        <h1 className="main-title">Add Quote</h1>
                        <div className="row mt60 mb60 container-offset-20">
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col col-xs-2">
                                        <h3 className="gradient-text blue-gradient">01</h3>
                                    </div>
                                    <div className="col-lg-9 col-11 col-xs-10">
                                        <h3>Relation</h3>
                                        <p className="text18 mt10">The quotes must be related to photography in some way to appear on our site.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3 mt-lg-0">
                                <div className="row">
                                    <div className="col col-xs-2">
                                        <h3 className="gradient-text blue-gradient">02</h3>
                                    </div>
                                    <div className="col-lg-9 col-11 col-xs-10">
                                        <h3>Moderation</h3>
                                        <p className="text18 mt10">It might take some days to appear quotes you add. We reserve the right to review, remove and edit any quotes, at any time, for any reason.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3 mt-lg-0">
                                <div className="row">
                                    <div className="col col-xs-2">
                                        <h3 className="gradient-text blue-gradient">03</h3>
                                    </div>
                                    <div className="col-lg-9 col-11 col-xs-10">
                                        <h3>Support</h3>
                                        <p className="text18 mt10">You can also email us all your quotes and we will add them to the database for you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-col-container row">
                        <div className="side-col-container__left col-xl-9 col-lg-8 mt0">
                            <div className="side-col-container__content">
                                <form action="" className="add-form">
                                    <div className="input-group add-form__elem">
                                        <label className="text16 gray-font">
                                            Source:
                                <select>
                                                <option value="">Name</option>
                                                <option value="1">Berenice Abbott</option>
                                                <option value="2">Berenice Abbott 2</option>
                                            </select>
                                        </label>
                                        <label className="text16 gray-font">
                                            OR Type Source Name::
                                <input type="text" placeholder="Source Name" className="d-block gray-form__elem mt10" disabled />
                                        </label>
                                    </div>
                                    <label className="text16 gray-font add-form__elem d-block">
                                        The quote:
                            <textarea placeholder="The quote" rows='4' className="gray-form__elem mt10"></textarea>
                                    </label>
                                    <label className="text16 gray-font add-form__elem d-block">
                                        Visible Comments:
                            <textarea placeholder="Visible comments" rows='4' className="gray-form__elem mt10"></textarea>
                                    </label>
                                    <label className="text16 gray-font add-form__elem d-block">
                                        <div className="d-flex justify-content-between">
                                            Tags:
                                <span className="text16 rel">Note: Separate Tags with spaces</span>
                                        </div>
                                        <input type="text" placeholder="Enter tags" className="d-block gray-form__elem mt10" />
                                    </label>
                                    <div className="gray-line mt60 mb60"></div>

                                    <div className="row container-offset-10 add-form__elem">
                                        <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                                            <label htmlFor="name" generated="true" className="error message message-bottom"></label>
                                            <label className="text16 gray-font">
                                                Your name:
                                    <input type="text" className="d-block gray-form__elem mt10" placeholder="Name" name="name" id="name" />
                                            </label>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <label htmlFor="email" generated="true" className="error message message-bottom"></label>
                                            <label className="text16 gray-font">
                                                Your E-Mail Addess:
                                    <input type="email" placeholder="E-mail" className="d-block gray-form__elem mt10" id="email" name="email" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mt40">
                                        <span className="text16 gray-font">Enter the code shown above:</span>
                                    </div>
                                    <div className="mt10 capcha-container">
                                        <img src="assets/capcha.jpg" alt="" className="capcha" />
                                        <button className="refresh-btn"></button>
                                    </div>
                                    <button type="submit" className="btn wide-text btn__blue-gradient mt50 d-block mx-auto mx-lg-0">Add quote</button>
                                </form>
                            </div>
                        </div>
                        <div className="side-col-container__right col-xl-3 col-lg-4 d-flex align-items-center mt0">
                            <div className="banner-container-200">
                                <img src="assets/google-200.jpg" alt="" className="banner-200__left" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb80">
                    <div className="banner-container banner-container-728">
                        <img src="assets/google-728.jpg" alt="" className="banner-7284" />
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}