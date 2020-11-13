import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Menu from '../components/menu'

export default function Fav() {
    const [tabStat, setTabStat] = useState(1);

    const setTab = (id) => {
        setTabStat(id);
    }

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
                <title>Photo Quotes</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <header className="container-fluid">
                <div className="container">
                    <div className="top-header">
                        <div className="top-header__left">
                            <a href="/">
                                <Image src="/assets/logo.png" alt="Logo" unsized />
                            </a>
                        </div>
                        <Menu />
                        <div className="top-header__right">
                            <a href=""><span className="icon-user"></span></a>
                            <div className="menu-icon">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="container">
                    <div className="row tabs-container">
                        <div className={tabStat == 1 ? "tab tab__active" : "tab"} data-tab="tab-1">
                            <h3 className="tab-item main-title" onClick={() => setTab(1)}>Favourites</h3>
                            <span className="tab-item__counter tab-item__counter-big">6</span>
                        </div>
                        <div className={tabStat == 2 ? "tab tab__active" : "tab"} data-tab="tab-2">
                            <h3 className="tab-item main-title" onClick={() => setTab(2)}>Collections</h3>
                            <span className="tab-item__counter tab-item__counter-big">3</span>
                        </div>
                    </div>
                </section>

                <section className="container tab-content container-latest pt80" id="tab-1" style={tabStat !== 1 ? { display: 'none' } : {}}>
                    <div className="row pb80 justify-content-md-between">
                        <div className="col-12 col-lg-6 wow zoomIn">
                            <div className="quote mt0">
                                <div className="quote__top">
                                    <a href="#" className="tag tag__blue">#art</a>
                                    <a href="#" className="tag tag__blue">#photography</a>
                                </div>
                                <div className="quote__center">
                                    <p>“None. They should just go out and photograph and stop talking about it. That’s the only way they are going to find themselves. They can’t do it in their heads – they have to go out and do it in the camera and get it on film.”</p>
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
                            <div className="card image-card middle-card mt80">
                                <img src="assets/card-bg2.jpg" alt="" className="image-card__bg" />
                                <div className="card__content">
                                    <div className="card__top">
                                        <a href="#" className="tag tag__white">#art</a>
                                        <a href="#" className="tag tag__white">#photography</a>
                                    </div>
                                    <div className="card__text">
                                        <p>It is or should be a significant document, a penetIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrIt is or should be a significant document, a penetrrating statement, which can be described in a very simple term.</p>
                                    </div>
                                    <div className="card__bottom d-flex justify-content-between">
                                        <a className="card__author" href="#">Berenice Abbott</a>
                                        <div className="card__icons">
                                            <span className="counter">7</span>
                                            <span className="icon-comment"></span>
                                            <span className="icon-share"></span>
                                            <span className="like like-white"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="quote">
                                <div className="quote__top">
                                    <a href="#" className="tag tag__blue">#art</a>
                                    <a href="#" className="tag tag__blue">#photography</a>
                                </div>
                                <div className="quote__center">
                                    <p>
                                        Light meters read; photographers interpret.
                        </p>
                                </div>
                                <div className="quote__bottom">
                                    <a className="quote-author" href="#">Sijmen Immens</a>
                                    <div className="icons">
                                        <span className="counter">3</span>
                                        <span className="icon-comment"></span>
                                        <span className="icon-share"></span>
                                        <span className="like like-gray"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 wow zoomIn" data-wow-delay=".2s">
                            <div className="quote mt0">
                                <div className="quote__top">
                                    <a href="#" className="tag tag__blue">#art</a>
                                    <a href="#" className="tag tag__blue">#photography</a>
                                </div>
                                <div className="quote__center">
                                    <p>
                                        The art is the challenge which you must meet every day: the technique you should learn to control with time. The science and the art of photography are really one, and not opposed to each other.
                        </p>
                                </div>
                                <div className="quote__bottom">
                                    <a className="quote-author" href="#">Yousuf Karsh</a>
                                    <div className="icons">
                                        <span className="counter">commented</span>
                                        <span className="icon-comment"></span>
                                        <span className="icon-share"></span>
                                        <span className="like like-gray"></span>
                                    </div>
                                </div>
                                <div className="quote__meta">
                                    <p className="gray-font">
                                        National Geographic - Field Guide by Peter K. Burian and Robert Caputo
                        </p>
                                </div>
                                <div className="quote__meta">
                                    <p>ISBN: 0817454098 , Page: 242. This book is available from <span>Amazon.com</span></p>
                                </div>
                            </div>
                            <div className="quote">
                                <div className="quote__top">
                                    <a href="#" className="tag tag__blue">#art</a>
                                    <a href="#" className="tag tag__blue">#photography</a>
                                </div>
                                <div className="quote__center">
                                    <p>
                                        Be soft. Do not let the world make you hard. Do not let pain make you hate. Do not let the bitterness steal your sweetness.
                        </p>
                                </div>
                                <div className="quote__bottom">
                                    <a className="quote-author" href="#">Sijmen Immens</a>
                                    <div className="icons">
                                        <span className="counter">3</span>
                                        <span className="icon-comment"></span>
                                        <span className="icon-share"></span>
                                        <span className="like like-gray"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="quote">
                                <div className="quote__top">
                                    <a href="#" className="tag tag__blue">#art</a>
                                    <a href="#" className="tag tag__blue">#photography</a>
                                </div>
                                <div className="quote__center">
                                    <p>
                                        During this time the photos are nearly all poor, but I believe they develop my seeing and help later on in other photos.
                        </p>
                                </div>
                                <div className="quote__bottom d-flex justify-content-between">
                                    <a className="quote-author" href="#">Berenice Abbott</a>
                                    <div className="icons">
                                        <span className="counter">7</span>
                                        <span className="icon-comment"></span>
                                        <span className="icon-share"></span>
                                        <span className="like like-gray"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container tab-content container-latest pt80" id="tab-2" style={tabStat !== 2 ? { display: 'none' } : {}}>
                    <div>
                        Tab 2 content
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}