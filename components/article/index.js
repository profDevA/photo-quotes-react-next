import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { FadeInDiv } from './style';
import parse from 'html-react-parser';

const SERVER_URI = process.env.NODE_ENV === 'development' ? process.env.DEV_SERVER_URI : process.env.PROD_SERVER_URI;

const Article = ({ article }) => {

    return (
        <div className="col-xl-4 col-md-6">
            <FadeInDiv>
                <Link href={'blogs/' + article.slug}>
                    <div className="article article__offset wow fadeIn">
                        <div className="article-cover">
                            <img src={SERVER_URI + '/uploads/' + article.featured_image} alt="" />
                            <div className="cover__hover">
                                <a className="cover__hover-img">
                                    <img src="/assets/icons/arrow.svg" alt="Go" />
                                </a>
                            </div>
                        </div>
                        <div className="article-top">
                            <a className="article-top__title title">
                                {article.title}
                            </a>
                        </div>
                        <div className="article-content">
                            <div className="article-content__text text18">
                                {parse(article.text)}
                            </div>
                        </div>
                    </div>
                </Link>
            </FadeInDiv>
        </div>
    )
}

export default Article;