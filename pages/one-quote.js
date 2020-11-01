import Header from '../components/header'
import Footer from '../components/footer'
import Comments from '../components/comments'

export default function OneQuote() {
    return (
        <>
            <Header />
            <main>
                <section className="container container-blog pt80 pb120">
                    <div className="quote mt0 no-border wow zoomIn">
                        <div className="quote__top">
                            <a href="#" className="tag tag__blue">#art</a>
                            <a href="#" className="tag tag__blue">#photography</a>
                        </div>
                        <div className="quote__center">
                            <p className="big-text">“None. They should just go out and photograph and stop talking about it. That’s the only way they are going to find themselves. They can’t do it in their heads – they have to go out and do it in the camera and get it on film.”</p>
                        </div>
                        <div className="quote__bottom">
                            <a className="quote-author" href="#">Berenice Abbott</a>
                            <div className="icons">
                                <span className="counter">7</span>
                                <span className="icon-comment"></span>
                                <span className="icon-share"></span>
                                <span className="like like-gray"></span>
                            </div>
                        </div>
                        <div className="quote__meta">
                            <p className="gray-font">when asked is she had any gems of wisdom for the photographer today., Professional photographer's survival guide by Charles E. Rotkin</p>
                        </div>
                        <div className="quote__meta">
                            <p>ISBN: 0817454098 , Page: 242. This book is available from <span>Amazon.com</span></p>
                        </div>
                    </div>
                </section>

                <section className="container mb60">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 pr10">
                            <Comments />
            </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="banner-container-200">
                                <img src="assets/google-200.jpg" alt="" className="banner-200__left" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb80">
                    <div className="banner-container banner-container-728">
                        <img src="assets/google-728.jpg" alt="" className="" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}