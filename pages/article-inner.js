import Header from '../components/header/WhiteHeader'
import Footer from '../components/footer'

export default function ArticleInner() {
    return (
        <>
            <section className="hero-bg" style={{backgroundImage: 'url(assets/art-bg.jpg)'}}>
                <Header />
            </section>
            <main>
                <section className="container inner-container pb120">
                    <div className="side-col-container side-col-container__inner row">
                        <div className="col-12">
                            <div className="nav-chain">
                                <ul>
                                    <li><a href="#">Authors</a></li>
                                    <li className="separator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </li>
                                    <li><a href="#">Abbott Berenice</a></li>
                                    <li className="separator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </li>
                                    <li className="active"><a href="#">Articles</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="side-col-container__left col-xl-9 col-lg-8">
                            <div className="side-col-container__content">
                                <h1 className="main-title">What’s so Special About Google’s Pixel 3?</h1>
                                <p className="text18 side-col-container__desc">Long-overlooked “tunneling nanotubes” and other bridges between cells act as conduits for sharing RNA, proteins or even whole organelles.</p>
                                <p className="text16 side-col-container__text">
                                    To chart a course, one must have a direction. In reality, the eye is no better than the philosophy behind it. The photographer creates, evolves a better, a more selective, more acute seeing eye by looking ever more sharply at what is going on in the world. Like every other means of expression, photography, if it is to be utterly honest and direct, should be related to the life of the times––the pulse of today. The photograph may be presented as finely and artistically as you will; but to merit serious consideration, must be directly connected with the world we live in.
                                </p>
                                <p className="text16 side-col-container__text">
                                    What we need is a return, on a mounting spiral of historic understanding, to the great tradition of realism. Since ultimately the photograph is a statement, a document of the now, a greater responsibility is put on us. Today, we are confronted with reality on the vastest scale mankind has known. Some people are still unaware that reality contains unparalleled beauties. The fantastic and unexpected, the everchanging and renewing is nowhere so exemplified as in real life itself. Once we understand this, it exercises a dynamic compulsion on us, and a photo-document is born.
                                </p>
                                <div className="side-col-container__quote">
                                    <img src="assets/icons/quotes.svg" alt="" />
                                    <p className="side-col-container__quote-text">
                                        I have yet to see a fine photograph which is not a good document.
                                    </p>
                                </div>
                                <p className="text16 side-col-container__text">
                                    The term ‘documentary’ is sometimes applied in a rather derogatory sense to the type of photography which to me seems logical. To connect the term ‘documentary’ with only the 'ash-can school' is so much sheer nonsense, and probably stems from the bad habit of pigeon-holing and labelling everything like the well-known 57 varieties. Actually, documentary pictures include every subject in the world––good, bad, indifferent. I have yet to see a fine photograph which is not a good document.                </p>
                            </div>
                        </div>

                        <div className="side-col-container__right col-xl-3 col-lg-4">
                            <div className="info">
                                <p className="text16 gray-font">Written about</p>
                                <p className="text18 dark-gray-font semibold">Abbot Benerice</p>
                            </div>
                            <div className="btn-container">
                                <a href="" className="outline-btn wide-text"><span className="icon-share"></span>Share</a>
                                <a href="" className="outline-btn wide-text liked-btn"><span className="like like-gray"></span>Liked</a>
                            </div>
                            <div className="banner-container-200">
                                <img src="assets/google-200.jpg" alt="" className="banner-200" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid gray-gradient pb160 pt130 rel">
                    <div className="banner-container banner-container-728 banner-container-abs">
                        <img src="assets/google-728.jpg" alt="" className="banner-728" />
                    </div>

                    <div className="container container-blog container-blog__nogutters rel">
                        <div className="row justify-content-between align-items-center blog__top">
                            <div className="col-md-10 col-12">
                                <h2>Other articles by Abbott Berenice</h2>
                            </div>
                            <div className="col-2">
                                <a className="dark-gray-font wide-text title-more" href="#">More news</a>
                            </div>
                        </div>
                        <div className="row mt80">
                            <div className="col-4">
                                <div className="article slider-item-blog wow fadeInUp">
                                    <img src="assets/art1.jpg" alt="" />
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
                                    <img src="assets/art2.jpg" alt="" />
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
                                    <img src="assets/art3.jpg" alt="" />
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