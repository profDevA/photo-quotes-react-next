import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'

export default function Authors() {
    return (
        <>
            <Header />
            <main>
                <section className="container ptb90">
                    <h1 className="main-title">All Authors</h1>
                    <div className="row tabs-container authors-filter__alpha wow slideInRight"></div>

                    <div className="row container-offset-20 tab-content tab-content__p0 wow slideInRight" id="tab-a" data-wow-delay=".3s">
                        <div className="col-lg-3 col-6 col-xs authors-list">
                            <ul className="list-links__gray">
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-6 col-xs authors-list d-lg-block d-xs-none">
                            <ul className="list-links__gray">
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-6 col-xs">
                            <ul className="list-links__gray d-lg-block d-none">
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-6 col-xs d-lg-block d-none">
                            <ul className="list-links__gray">
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                                <li><a href="">Abadzic, Stanko</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row container-more d-lg-none d-sm-flex">
                        <a href="#" className="wide-text btn btn__blue-gradient">Load more</a>
                    </div>
                </section>

                <section className="pb80">
                    <div className="banner-container banner-container-728">
                        <Image src="/assets/google-728.jpg" alt=""  width={728} height={90} />
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}