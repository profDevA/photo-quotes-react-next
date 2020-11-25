import Head from "next/head";
import WhiteHeader from "../../components/header/WhiteHeader";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState, useEffect } from "react";

const AuthorBackground = styled.section`
  background-image: url(${(props) => props.background}) !important;
  height: 100vh;

  &::before {
    content: "";
    background-color: #2f343b;
    background-repeat: repeat-y;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export default function Quotes({ source, metaTitle, metaDescription, by }) {
  let fullName = `${source.firstName} ${source.middleName} ${source.lastName}`;
  if (fullName.includes(null)) {
    fullName = fullName.replace(null, "");
  }

  const [image, setImage] = useState(source.backgroundImage);

  useEffect(() => {
    setImage(source.backgroundImage);
  }, [source]);

  return (
    <>
      <Head>
        <meta name="robots" content={metaDescription} />
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AuthorBackground className="hero-bg" background={source.backgroundImage}>
        <WhiteHeader />
        <section className="hero-section__white hero-section row container ptb90">
          <div className="hero-section__left col-xl-4 col-lg-5 col-12 wow fadeInRight">
            <div className="hero-section__left_top">
              <h2 class="big-lettering" data-tab="tab-1">
                {by}
              </h2>

              <h1 className="mt10 main-title">{fullName}</h1>
              <div className="author-info">
                {/* <p>[1898 – 1991]</p> */}
                {/* <p>American photographer</p> */}
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
                  {source.Quotes.length > 0 &&
                    source.Quotes[0].tag_name.length > 0 &&
                    source.Quotes[0].tag_name.map((item, index) => (
                      <a href="#" className="tag tag__white" key={index}>
                        #{item}
                      </a>
                    ))}
                </div>
                <div className="card__text">
                  <p>{source.Quotes.length > 0 && source.Quotes[0].quote}</p>
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
