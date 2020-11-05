
import {useState} from 'react'
import Head from 'next/head';
import Image from 'next/image';
import Menu from '../components/menu';
import Footer from '../components/footer';
import TabQuotes from '../components/tabs/TabQuotes'
import TabArticles from '../components/tabs/TabArticles'
import TabBooks from '../components/tabs/TabBooks'
import TabGallery from '../components/tabs/TabGallery'
import TabInterviews from '../components/tabs/TabInterviews'

export default function Search() {
    const [activeTabId, setActiveTabId] = useState(1);
    const [tabs, setTabs] = useState([
        'Quotes', 'Books', 'Interviews', 'Articles', 'Gallery'
    ]);
    const onClick = (id) => {
        setActiveTabId(id);
    }
    return (
        <>
            <Head>
                <title>Photo Quotes</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <header className="container-fluid">
                <div className="container">
                    <div className="top-header">
                        <div className="top-header__left">
                            <a href="index.html">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Logo Image"
                                    unsized
                                />
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
                <section className="container pt60">
                    <form action="" className="search-form">
                        <label className="text__small d-block mb10" htmlFor="search">Search results:</label>
                        <input type="text" defaultValue="Berenice" id="search" />
                        <button type="submit" className="icon-search"></button>
                    </form>
                </section>
                <section className="container">
                    <div className="row tabs-container">
                        {
                            tabs.map((tab, i) => {
                                return(
                                    <div key={i} className={activeTabId == i +1 ? "tab tab__active" : "tab"} data-tab="tab-1" onClick={() => onClick(i + 1)}>
                                        <h3 className="tab-item">{tab}</h3>
                                        <span className="tab-item__counter">21</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
                <TabQuotes active={activeTabId == 1 ? true : false} />
                <TabBooks active={activeTabId == 2 ? true : false} />
                <TabInterviews active={activeTabId == 3 ? true : false} />
                <TabArticles active={activeTabId == 4 ? true : false} />
                <TabGallery active={activeTabId == 5 ? true : false} />
                <section className="container-fluid gray-gradient">
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
                        <div className="col-xl-2 col-6 container-links wow fadeInUp" data-wow-delay=".3s">
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
                        <div className="col-xl-8 col-lg-12 container-dayquotes wow fadeInUp" data-wow-delay=".6s">
                            <div className="row justify-content-xl-between flex-wrap">
                                <div className="col-md-6 col d-flex flex-column justify-content-lg-between">
                                    <h3 className="w75-md">Photo Quotes of the Day</h3>
                                    <div className="banner-container banner-container-320">
                                        <img src="assets/google-320.jpg" alt="" className="banner-320" />
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
            </main >
            <Footer />
        </>
    )
}