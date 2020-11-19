import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import WhiteHeader from "../../components/header/WhiteHeader";
import Footer from "../../components/footer";
import TabQuotes from "../../components/tabs/TabQuotes";
import TabArticles from "../../components/tabs/TabArticles";
import TabBooks from "../../components/tabs/TabBooks";
import TabGallery from "../../components/tabs/TabGallery";
import TabInterviews from "../../components/tabs/TabInterviews";
import { SERVER_URI } from "../../constants";

export default function OneAuthor({ source }) {
  const [activeTabId, setActiveTabId] = useState(1);
  const [tabs, setTabs] = useState([
    "Quotes",
    "Books",
    "Interviews",
    "Articles",
    "Gallery",
  ]);
  const onClick = (id) => {
    setActiveTabId(id);
  };
  console.log(source);
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Photo Quotes</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="hero-bg hero-bg__author">
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

              <h1 className="mt10 main-title">{source.sourceName}</h1>
              <div className="author-info">
                <p>[1898 – 1991]</p>
                <p>American photographer</p>
              </div>
            </div>
            <div className="hero-section__left_bottom scroll-down">
              <img src="assets/icons/mouse.svg" alt="" />
              <p className="ml20">Scroll down</p>
            </div>
          </div>
          <div
            className="hero-section__right col-xl-8 col-lg-7 col-12 wow fadeInRight"
            data-wow-delay=".2s"
          >
            <div className="card big-card image-card">
              <img
                src="assets/card-bg1.jpg"
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
                  <p>
                    It is or should be a significant document, a penetrating
                    statement, which can be described in a very simple term.
                  </p>
                </div>
                <div className="card__bottom">
                  <a className="card__author" href="#">
                    Berenice Abbott
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
      </section>
      <main>
        <section className="container">
          <div className="row tabs-container">
            {tabs.map((tab, i) => {
              return (
                <div
                  key={i}
                  className={activeTabId == i + 1 ? "tab tab__active" : "tab"}
                  data-tab="tab-1"
                  onClick={() => onClick(i + 1)}
                >
                  <h3 className="tab-item">{tab}</h3>
                  <span className="tab-item__counter">21</span>
                </div>
              );
            })}
          </div>
        </section>
        <TabQuotes active={activeTabId == 1 ? true : false} />
        <TabBooks active={activeTabId == 2 ? true : false} />
        <TabArticles active={activeTabId == 3 ? true : false} />
        <TabGallery active={activeTabId == 4 ? true : false} />
        <TabInterviews active={activeTabId == 5 ? true : false} />

        <section className="pb80">
          <div className="banner-container banner-container-728">
            <img src="/assets/google-728.jpg" alt="" className="banner-728d" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const res = await axios.get(SERVER_URI + "/api/sources/" + slug);
  console.log(res.data);
  return {
    props: { source: res.data },
  };
}
