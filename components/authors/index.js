import Head from "next/head";
import WhiteHeader from "../../components/header/WhiteHeader";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState, useEffect } from "react";

const AuthorBackground = styled.section`
  background-image: url(${(props) => props.background}) !important;
`;

export default function Quotes({ source, metaTitle, metaDescription }) {
  let fullName = `${source.firstName} ${source.middleName} ${source.lastName}`;
  if (fullName.includes(null)) {
    fullName = fullName.replace(null, "");
  }

  const [image, setImage] = useState(source.backgroundImage);

  useEffect(() => {
    setImage(source.backgroundImage);
    console.log(source.backgroundImage);
  }, [source]);

  return (
    <>
      <Head>
        <meta name="robots" content={metaDescription} />
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AuthorBackground className="hero-bg hero-bg__author" background={image}>
        <WhiteHeader />
        <section className="hero-section__white hero-section row container ptb90">
          <div className="hero-section__left col-xl-4 col-lg-5 col-12 wow fadeInRight">
            <div className="hero-section__left_top">
              <h2 className="big-lettering tab-title" data-tab="tab-1">
                Quotes by
              </h2>
              <h2 className="big-lettering tab-title" data-tab="tab-2">
                Books about
              </h2>
              <h2 className="big-lettering tab-title" data-tab="tab-3">
                Interviews with
              </h2>
              <h2 className="big-lettering tab-title" data-tab="tab-4">
                Articles about
              </h2>
              <h2 className="big-lettering tab-title" data-tab="tab-5">
                Photographs by
              </h2>

              <h1 className="mt10 main-title">{fullName}</h1>
              <div className="author-info">
                {/* <p>[1898 – 1991]</p> */}
                <p>American photographer</p>
              </div>
            </div>
            <div className="hero-section__left_bottom scroll-down">
              <img src="../assets/icons/mouse.svg" alt="" />
              <p className="ml20">Scroll down</p>
            </div>
          </div>
          <div
            className="hero-section__right col-xl-8 col-lg-7 col-12 wow fadeInRight"
            data-wow-delay=".2s"
          >
            <div className="card big-card image-card">
              <img
                src="/assets/card-bg1.jpg"
                alt=""
                className="image-card__bg"
              />
              <div className="card__content">
                <div className="card__top">
                  <a href="#" className="tag tag__white">
                    #art
                  </a>
                  <a href="#" className="tag tag__white">
                    #photography
                  </a>
                </div>
                <div className="card__text">
                  <p>{source.Quotes[0].quote}</p>
                </div>
                <div className="card__bottom">
                  <a className="card__author" href="#">
                    {fullName}
                  </a>
                  <div className="card__icons">
                    <span className="icon-share"></span>
                    <span className="like like-white"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AuthorBackground>
    </>
  );
}

Quotes.propTypes = {
  source: PropTypes.object,
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
};

Quotes.defaultProps = {
  metaTitle: "",
  metaDescription: "",
};
