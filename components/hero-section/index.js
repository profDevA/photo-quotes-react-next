export default function HeroSection() {
    return (
        <section className="hero-section row container ptb110">
            <div className="hero-section__left col-xl-3 col-lg-4 wow fadeInRight">
                <div className="hero-section__left_top">
                    <h2 className="big-lettering">Best</h2>
                    <h2 className="mt30">Photo Quotes</h2>
                </div>
                <div className="hero-section__left_bottom scroll-down">
                    <img src="/assets/icons/mouse.svg" alt="" />
                    <p className="ml20">Scroll down</p>
                </div>
            </div>
            <div className="hero-section__right col-xl-8 col-lg-7 wow fadeInRight" data-wow-delay=".2s">
                <div className="hero-slider">
                    <div className="card big-card image-card">
                        <img src="/assets/card-bg1.jpg" alt="" className="image-card__bg" />
                        <div className="card__content">
                            <div className="card__top">
                                <a href="#" className="tag tag__white">#art</a>
                                <a href="#" className="tag tag__white">#photography</a>
                            </div>
                            <div className="card__text">
                                <p>It is or should be a significant document, a penetrating statement, which can be described in a very simple term.</p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__author" href="one-author.html">Berenice Abbott</a>
                                <div className="card__icons">
                                    <span className="icon-share"></span>
                                    <span className="like like-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card big-card image-card">
                        <img src="/assets/card-bg2.jpg" alt="" className="image-card__bg" />
                        <div className="card__content">
                            <div className="card__top">
                                <a href="#" className="tag tag__white">#art</a>
                                <a href="#" className="tag tag__white">#photography</a>
                            </div>
                            <div className="card__text">
                                <p>It is or should be a significant document, a penetIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrrating statement, which can be described in a very simple term.</p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__author" href="#">Berenice Abbott</a>
                                <div className="card__icons">
                                    <span className="icon-share"></span>
                                    <span className="like like-white"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}