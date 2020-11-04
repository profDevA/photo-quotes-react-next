import Slider from "react-slick"
import Header from '../components/header'
import Footer from '../components/footer'
import HeroSection from '../components/hero-section'

export default function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <section className="hero-bg hero-bg__white">
        <Header />
        <HeroSection />
      </section>
      <div>
      </div>
      <main>
        <section className="container-fluid gray-gradient" id="first-section">
          <div className="row container ptb110">
            <div className="col-xl-2 col-6 container-links wow fadeInUp">
              <h3>Popular Topics</h3>
              <ul className="list-links__gray">
                <li><a href="">Motivational</a></li>
                <li><a href="">Friendship</a></li>
                <li><a href="">Life</a></li>
                <li><a href="">Positive</a></li>
                <li><a href="">Smile</a></li>
                <li><a href="">Love</a></li>
                <li><a href="">Family</a></li>
                <li><a href="">Inspirational</a></li>
              </ul>
              <a href="" className="dark-gray-font wide-text">More topics</a>
            </div>
            <div className="col-xl-2 col-6 container-links wow fadeInUp" data-wow-delay=".1s">
              <h3>Top Photo graphers</h3>
              <ul className="list-links__gray">
                <li><a href="">William Shakespeare</a></li>
                <li><a href="">Mark Twain</a></li>
                <li><a href="">Albert Einstein</a></li>
                <li><a href="">Mahatma Gandhi</a></li>
                <li><a href="">Winston Churchill</a></li>
                <li><a href="">Friedrich Neitzsche</a></li>
                <li><a href="">Abraham Lincoln</a></li>
                <li><a href="">Confucius</a></li>
              </ul>
              <a href="" className="dark-gray-font wide-text">More topics</a>
            </div>
            <div className="col-xl-8 col-lg-12 container-dayquotes wow fadeInUp" data-wow-delay=".2s">
              <div className="row justify-content-xl-between flex-wrap">
                <div className="col-md-6 col d-flex flex-column justify-content-lg-between">
                  <h3 className="w75-md">Photo Quotes of the Day</h3>
                  <div className="banner-container banner-container-320">
                    <img src="/assets/google-320.jpg" alt="" className="banner-320" />
                  </div>
                </div>
                <div className="col">
                  <div className="card small-card purple-gradient slider-item-dq">
                    <div className="card__content">
                      <div className="card__text">
                        <p>I think all art is about con think all art is abou think all art is abou think all art is abou think all art is abou think all art is aboutrol - the encounter between control and the uncontrollable.</p>
                      </div>
                      <div className="card__bottom">
                        <a className="card__author" href="#">Richard Avedon</a>
                        <div className="card__icons">
                          <span className="icon-share mr30"></span>
                          <span className="like like-white"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card small-card blue-gradient slider-item-dq">
                    <div className="card__content">
                      <div className="card__text">
                        <p>Art starts where consciousness ends. This is why we must invent untruths for those who require …</p>
                      </div>
                      <div className="card__bottom">
                        <a className="card__author" href="#">Patrick Summerfield </a>
                        <div className="card__icons">
                          <span className="icon-share mr30"></span>
                          <span className="like like-white"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card small-card pink-gradient slider-item-dq">
                    <div className="card__content">
                      <div className="card__text">
                        <p>The purpose of art is to raise people to a higher level of awareness than they would…</p>
                      </div>
                      <div className="card__bottom">
                        <a className="card__author" href="#">Brassai</a>
                        <div className="card__icons">
                          <span className="icon-share mr30"></span>
                          <span className="like like-white"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid gray-gradient pb170 container-latest">
          <div className="row container ptb110 justify-content-md-between">
            <div className="col-12 col-lg-6 wow zoomIn" data-wow-delay=".2s">
              <h2 className="w50-md">Latest Photography Quotes</h2>
              <div className="quote">
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
                <img src="/assets/card-bg2.jpg" alt="" className="image-card__bg" />
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
              <div className="banner-container banner-container-300">
                <img src="/assets/google-300.jpg" alt="" className="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 wow zoomIn" data-wow-delay=".4s">
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
                    <span className="counter"></span>
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
                    I'm paid to be lucky and that means making your own luck - getting yourself in the right position, in front of the right subject at the right time, and in the right light.
                        </p>
                </div>
                <div className="quote__bottom">
                  <a className="quote-author" href="#">Berenice Abbott</a>
                  <div className="icons">
                    <span className="icon-comment"></span>
                    <span className="icon-share"></span>
                    <span className="like like-gray"></span>
                  </div>
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
          <div className="row container justify-content-center">
            <a href="#" className="wide-text btn btn__blue-gradient">Load more</a>
          </div>
        </section>
        <section className="container-fluid gray-gradient pb160 pt130 rel">
          <div className="banner-container banner-container-728 banner-container-abs">
            <img src="/assets/google-728.jpg" alt="" className="" />
          </div>

          <div className="container container-blog container-blog__nogutters rel">
            <div className="row justify-content-between align-items-center blog__top">
              <div className="col-md-10 col-12">
                <h2>Blog about photography</h2>
              </div>
              <div className="col-2">
                <a className="dark-gray-font wide-text title-more" href="#">More news</a>
              </div>
            </div>
            <div className="row mt80">
              {/* <Slider {...sliderSettings}> */}
                <div className="col-4">
                  <div className="article slider-item-blog wow fadeInUp">
                    <img src="/assets/art1.jpg" alt="" />
                    <div className="article-top">
                      <a className="article-top__title title" href="#">
                        How to Make Time to Make Things
                            </a>
                    </div>
                    <div className="article-content">
                      <p className="article-content__text text18">
                        We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do
                            </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="article slider-item-blog wow fadeInUp" data-wow-delay=".2s">
                    <img src="/assets/art2.jpg" alt="" />
                    <div className="article-top">
                      <a className="article-top__title title" href="#">
                        The Domestication of Cryptocurrency
                            </a>
                    </div>
                    <div className="article-content">
                      <p className="article-content__text text18">
                        During the internet’s nascent life, a lot of researchers, early adopters, and enthusiasts recognized that the technology would pose serious problems for acting anonymously online. The very nature of internet infrastructure is problematic for
                            </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="article slider-item-blog wow fadeInUp" data-wow-delay=".4s">
                    <img src="/assets/art3.jpg" alt="" />
                    <div className="article-top">
                      <a className="article-top__title title" href="#">
                        What’s so Special About Google’s Pixel 3?
                            </a>
                    </div>
                    <div className="article-content">
                      <p className="article-content__text text18">
                        Google is about to drop several new products on us, but we’re still not sure if its strategy makes sense
                            </p>
                    </div>
                  </div>
                </div>
              {/* </Slider> */}
            </div>
            <div className="row container-more container-more__hide">
              <a href="#" className="wide-text btn btn__blue-gradient">More articles</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
