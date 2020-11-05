import Header from '../components/header'
import Footer from '../components/footer'

export default function AddAdvertise() {
    return (
        <>
            <Header />
            <main>
                <section className="container pt80 pb70">
                    <div className="side-col-container row">
                        <div className="side-col-container__left col-xl-9 col-lg-8 mt0">
                            <div className="side-col-container__content">
                                <h1 className="main-title">Advertise on PhotoQuotes.com</h1>
                                <p className="text18 side-col-container__desc w80">
                                    Long-overlooked “tunneling nanotubes” and other bridges between cells act as conduits for sharing RNA, proteins or even whole organelles.
                                </p>
                                <form action="" className="add-form">

                                    <div className="row container-offset-10">
                                        <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                                            <label htmlFor="name" generated="true" className="error message message-bottom"></label>
                                            <label className="text16 gray-font">
                                                Name:
                                    <input type="text" placeholder="Name" className="d-block gray-form__elem mt10" id="name" name="name" />
                                            </label>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <label className="text16 gray-font">
                                                Company:
                                    <input type="text" placeholder="Company" className="d-block gray-form__elem mt10" disabled />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row container-offset-10 add-form__elem">
                                        <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                                            <label className="text16 gray-font">
                                                Phone:
                                    <input type="tel" className="d-block gray-form__elem mt10" />
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

                                    <label className="text16 gray-font d-block add-form__elem">
                                        Visible Comments:
                            <textarea placeholder="Visible comments" rows='4' className="gray-form__elem mt10"></textarea>
                                    </label>
                                    <button type="submit" className="btn wide-text btn__blue-gradient mt50 d-block mx-auto mx-lg-0">Send</button>
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
                        <img src="assets/google-728.jpg" alt="" className="banner-728s" />
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}