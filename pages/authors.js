import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from 'next/link'
import Header from "../components/header";
import Footer from "../components/footer";
import { alphaLists, SERVER_URI } from "../constants";

function Authors(props) {
  const [state, setState] = useState({
    sources: {},
    selectedTab: "a",
  });

  const { sources, selectedTab } = state;

  useEffect(() => {
    console.log(props);
    setState({ ...state, sources: props });
  }, [props]);

  const selectTab = (item) => {
    setState({ ...state, selectedTab: item });
  };

  return (
    <>
      <Header title={"Authors - PhotoQuotes"} />
      <main>
        <section className="container ptb90">
          <h1 className="main-title">All Authors</h1>
          <div className="row tabs-container authors-filter__alpha wow slideInRight">
            {alphaLists.map((item, index) => (
              <div
                className={`tab ${selectedTab === item && `tab__active`}`}
                data-tab="tab-a"
                key={index}
                onClick={() => selectTab(item)}
              >
                <h3 className="tab-item">{item}</h3>
              </div>
            ))}
          </div>

          <div
            className="row container-offset-20 tab-content tab-content__p0 wow slideInRight"
            id="tab-a"
            data-wow-delay=".3s"
          >
            {sources &&
              Object.keys(sources).map((item, index) => {
                if (sources[item].firstName[0].toLowerCase().includes(selectedTab))
                  return (
                    <div className="col-lg-3 col-6 col-xs" key={index}>
                      <ul className="list-links__gray">
                        <li>
                        <Link href={'authors/' + sources[item].slug}>{`${sources[item].firstName ? sources[item].firstName : ''} ${sources[item].middleName ? sources[item].middleName : ''} ${sources[item].lastName ? sources[item].lastName : ''}`}</Link>
                        </li>
                      </ul>
                    </div>
                  );
              })}
          </div>
          <div className="row container-more d-lg-none d-sm-flex">
            <a href="#" className="wide-text btn btn__blue-gradient">
              Load more
            </a>
          </div>
        </section>

        <section className="pb80">
          <div className="banner-container banner-container-728">
            <img src="/assets/google-728.jpg" alt="" className="" width={728} height={90} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(SERVER_URI + "/api/sources");
  console.log(res.data);
  return {
    props: { ...res.data },
  };
}

export default Authors;
