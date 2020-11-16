import {useState, useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios';
import { useRouter } from 'next/router'
import Header from '../../components/header/WhiteHeader'
import Footer from '../../components/footer'
import Comments from '../../components/comments';
import BottomShortLink from '../../components/bottomShortLink';

const SERVER_URI = process.env.NODE_ENV === 'development' ? process.env.DEV_SERVER_URI : process.env.PROD_SERVER_URI;

export default function Blog(props) {
    const router = useRouter()
    const { blogId } = router.query;
    const [article, setArticle] = useState();

    useEffect(() => {
        setArticle(props.article)
        return () => {
        };
    }, []);

    console.log({props})

    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
                <title>Photo Quotes</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <section className="hero-bg" style={{ backgroundImage: "url('/assets/blog-bg.jpg')" }}>
                <Header />
            </section>
            {
                article &&
                <main>
                <section className="container inner-container pb160">
                    <div className="side-col-container side-col-container__inner row">
                        <div className="col-12">
                            <div className="nav-chain">
                                <ul>
                                    <li><a href="#">Blog</a></li>
                                    <li className="separator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </li>
                                    <li className="active"><a href="#">{article.title??''}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="side-col-container__left col-xl-9 col-lg-8">
                            <div className="side-col-container__content">
                                {article.text}
                            </div>
                        </div>

                        <div className="side-col-container__right col-xl-3 col-lg-4">
                            <div className="info">
                                <p className="text20 gray-font">By <span className="dark-gray-font">Palm</span></p>
                                <p className="text__small">{article.created_at}</p>
                            </div>
                            <div className="btn-container">
                                <a href="" className="outline-btn wide-text"><span className="icon-share"></span>Share</a>
                                <a href="" className="outline-btn wide-text"><span className="like like-gray"></span>Liked</a>
                            </div>
                            <div className="banner-container-200">
                                <img src="/assets/google-200.jpg" alt="" className="banner-200" />
                            </div>
                        </div>
                    </div>
                    <div className="row inner-comment-container">
                        <div className="gray-line"></div>
                        <Comments />
                    </div>
                </section>

                <section className="container-fluid gray-gradient pb160 pt130 rel">
                    <BottomShortLink />

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
                                <div className="article slider-item-blog">
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
                                <div className="article slider-item-blog">
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
                                <div className="article slider-item-blog">
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
                        </div>
                        <div className="row container-more container-more__hide">
                            <a href="#" className="wide-text btn btn__blue-gradient">More articles</a>
                        </div>
                    </div>
                </section>
            </main>
            }
            
            <Footer />
        </>
    )
}

export async function getServerSideProps({params}) {
    const {blogId} = params
    const res = await axios.get(SERVER_URI + '/api/articles/' + blogId);
    return {
        props: {article: res.data}
    }
}
