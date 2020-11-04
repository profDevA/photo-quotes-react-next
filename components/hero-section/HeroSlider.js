import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const HeroSlider = () => {
    return (
        <>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={60}
                totalSlides={2}
                infinite={true}
            >
                <Slider>
                    <Slide index={0}>
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
                    </Slide>
                    <Slide index={1}>
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
                    </Slide>
                </Slider>
                <ButtonBack className={'carousel__arrow-button icon-arrow-right'} />
                <ButtonNext className={'carousel__arrow-button icon-arrow-right'} />
                <DotGroup />
            </CarouselProvider>
        </>
    );
}

export default HeroSlider;