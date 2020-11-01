import React, {useState} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Article from '../components/article';

const Blogs = () => {
    const [articles, setArticles] = useState([
        {
            articleImage: '/assets/art2.jpg',
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: '/assets/art3.jpg',
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: '/assets/art4.jpg',
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: '/assets/art5.jpg',
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: '/assets/art6.jpg',
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: '/assets/art7.jpg',
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: '/assets/art8.jpg',
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
        {
            articleImage: '/assets/art9.jpg',
            articleTitle: 'How to Make Time to Make Things',
            articleContent: 'We live our lives on different clocks — biological, cultural, personal, and more. There are things we have to do and … things we want to do'
        },
    ]);
    return (
        <>
            <Header />
            <main>
                <section className="container container-blog ptb110">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <h2 className="big-lettering">Blog</h2>
                            <h2 className="mt30 main-title">About Photography</h2>
                        </div>
                        {
                            articles.map((article, index) => <Article key={index} articleTitle={article.articleImg2} articleImage={article.articleImage} articleContent={article.articleContent} />)
                        }
                    </div>
                    <div className="row container-more">
                        <a href="#" className="wide-text btn btn__blue-gradient">More articles</a>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default Blogs;

