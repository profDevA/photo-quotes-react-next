import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { FadeInDiv } from './style';
import parse from 'html-react-parser';

const Article = (props) => {

    return (
        <div className="col-xl-4 col-md-6">
            <FadeInDiv>
                <Link href={'blogs/' + props.articleId}>
                    <div className="article article__offset wow fadeIn">
                        <div className="article-cover">
                            <img src={props.articleImage} alt="" />
                            <div className="cover__hover">
                                <a className="cover__hover-img">
                                    <img src="/assets/icons/arrow.svg" alt="Go" />
                                </a>
                            </div>
                        </div>
                        <div className="article-top">
                            <a className="article-top__title title">
                                {props.articleTitle}
                            </a>
                        </div>
                        <div className="article-content">
                            <div className="article-content__text text18">
                                {parse(props.articleContent)}
                            </div>
                        </div>
                    </div>
                </Link>
            </FadeInDiv>
        </div>
    )
}

export default Article;