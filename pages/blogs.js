import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';
import Article from '../components/article';

const SERVER_URI = process.env.SERVER_URI

const Blogs = (props) => {
    const [articles, setArticles] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        setArticles(props.data);
        setPage(props.current_page)
        return () => {

        };
    }, []);

    const getMoreArticles = async () => {
        const res = await axios.get(SERVER_URI + '/api/articles?page=' + (page + 1));
        console.log(res, '=============')
        setPage(res.data.current_page)
        setArticles(prevState => {
            return [...prevState, ...res.data.data]
        });
    }

    console.log(articles, 'apiurl')

    return (
        <>
            <Header />
            <main>
                <section className="container container-blog ptb110">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <h1 className="big-lettering">Blog</h1>
                            <h1 className="mt30 main-title">About Photography</h1>
                        </div>
                        {
                            articles && articles.length > 0 &&
                            articles.map((article, index) => <Article key={index} articleTitle={article.title} articleImage={SERVER_URI + article.url} articleContent={article.text} />)
                        }
                    </div>
                    <div className="row container-more">
                        <a href="javascript:void(0)" className="wide-text btn btn__blue-gradient" onClick={() => getMoreArticles()} disabled={page === props.last_page ? true : false}>More articles</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export async function getStaticProps() {
    const res = await axios.get(SERVER_URI + '/api/articles');
    return {
        props: res.data
    }
}

export default Blogs;

