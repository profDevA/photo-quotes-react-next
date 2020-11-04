import HeroSlider from './HeroSlider'

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
                <HeroSlider />
            </div>
        </section>
    )
}
