import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import parse from "html-react-parser";
import Header from "../../../../components/header/WhiteHeader";
import Footer from "../../../../components/footer";
import { SERVER_URI } from "../../../../constants";

export default function ArticleInner({ source, title }) {
  const [article, setArticle] = useState(source.Articles);
  let fullName = `${source.firstName} ${source.middleName} ${source.lastName}`;
  if (fullName.includes(null)) {
    fullName = fullName.replace(null, "");
  }
  useEffect(() => {
    // source.Articles.map((item, index) => {
    //   // if (item.title === title) {
    //     setArticle({ ...article, main: item });
    //   // } else {
    //     // setArticle({ ...article, others: [...article.others, item] });
    //   // }
    // });
  }, []);
  return (
    <>
      <section
        className="hero-bg"
        style={{ backgroundImage: "url(/assets/art-bg.jpg)" }}
      >
        <Header title={"Article - PhotoQuotes"} />
      </section>
      <main>
        <section className="container inner-container pb120">
          {article.map((item, index) => {
            if (item.title === title) {
              return (
                <div
                  className="side-col-container side-col-container__inner row"
                  key={index}
                >
                  <Head>
                    <meta name="robots" content={item.meta_description} />
                    <title>{item.meta_title}</title>
                    <link rel="icon" href="/favicon.png" />
                  </Head>
                  <div className="col-12">
                    <div className="nav-chain">
                      <ul>
                        <li>
                          <a href="#">Authors</a>
                        </li>
                        <li className="separator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                        <li>
                          <a href="#">{fullName}</a>
                        </li>
                        <li className="separator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </li>
                        <li className="active">
                          <a href="#">Articles</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="side-col-container__left col-xl-9 col-lg-8">
                    <div className="side-col-container__content">
                      <h1 className="main-title">{item.title}</h1>
                      {item.text && parse(item.text)}
                    </div>
                  </div>

                  <div className="side-col-container__right col-xl-3 col-lg-4">
                    <div className="info">
                      <p className="text16 gray-font">Written about</p>
                      <p className="text18 dark-gray-font semibold">
                        {fullName}
                      </p>
                    </div>
                    <div className="btn-container">
                      <a href="" className="outline-btn wide-text">
                        <span className="icon-share"></span>Share
                      </a>
                      <a href="" className="outline-btn wide-text liked-btn">
                        <span className="like like-gray"></span>Liked
                      </a>
                    </div>
                    <div className="banner-container-200">
                      <img
                        src="assets/google-200.jpg"
                        alt=""
                        className="banner-200"
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </section>

        <section className="container-fluid gray-gradient pb160 pt130 rel">
          <div className="banner-container banner-container-728 banner-container-abs">
            <img src="assets/google-728.jpg" alt="" className="banner-728" />
          </div>

          <div className="container container-blog container-blog__nogutters rel">
            <div className="row justify-content-between align-items-center blog__top">
              <div className="col-md-10 col-12">
                <h2>Other articles by {fullName}</h2>
              </div>
              <div className="col-2">
                <a className="dark-gray-font wide-text title-more" href="#">
                  More news
                </a>
              </div>
            </div>
            <div className="row mt80">
              {article.length > 0 &&
                article.map((item, index) => {
                  if (item.title !== title) {
                    return (
                      <div className="col-4" key={index}>
                        <div className="article slider-item-blog wow fadeInUp">
                          <img
                            src={`${SERVER_URI}/uploads/${item.featured_image}`}
                            alt=""
                          />
                          <div className="article-top">
                            <a className="article-top__title title" href="#">
                              {item.title}
                            </a>
                          </div>
                          <div className="article-content">
                            {item.text && parse(item.text)}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
            <div className="row container-more container-more__hide">
              <a href="#" className="wide-text btn btn__blue-gradient">
                More articles
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { param, slug } = params;

  const res = await axios.get(SERVER_URI + "/api/sources/" + slug);
  return {
    props: { source: res.data, title: param[0].replace("-"," ") },
  };
}
