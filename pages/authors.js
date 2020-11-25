import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useSelector } from "react-redux";
import Header from "../components/header";
import Footer from "../components/footer";
import { alphaLists, SERVER_URI } from "../constants";

function Authors(props) {
  const storeData = useSelector((store) => store.search);
  const [state, setState] = useState({
    sources: {},
    selectedTab: "a",
    searchKeyword: "",
  });

  const { sources, selectedTab } = state;

  useEffect(() => {
    setState({ ...state, sources: props });
  }, [props]);

  useEffect(() => {
    if (storeData.searchKey) {
      setState({
        ...state,
        selectedTab: storeData.searchKey[0],
        searchKeyword: storeData.searchKey,
      });
    }
  }, [storeData]);

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
                  const fullName=  (sources[item].firstName ? sources[item].firstName : '') + " " + (sources[item].midleName ? sources[item].midleName + ' ' : '') + (sources[item].lastName ? sources[item].lastName : '')
                if (
                    fullName[0]
                    .toLowerCase()
                    .includes(selectedTab.toLowerCase()) &&
                  !storeData.searchKey
                ) {
                  return (
                    <div className="col-lg-3 col-6 col-xs" key={index}>
                      <ul className="list-links__gray">
                        <li>
                          <Link
                            href={"authors/" + sources[item].slug+"/quotes"}
                          >{fullName}</Link>
                        </li>
                      </ul>
                    </div>
                  );
                } else if (
                    fullName[0]
                    .toLowerCase()
                    .includes(selectedTab.toLowerCase()) &&
                  storeData.searchKey
                ) {
                  if (
                    fullName
                      .toLowerCase()
                      .includes(storeData.searchKey.toLowerCase())
                  )
                    return (
                      <div className="col-lg-3 col-6 col-xs" key={index}>
                        <ul className="list-links__gray">
                          <li>
                            <Link
                              href={"authors/" + sources[item].slug}
                            >{fullName}</Link>
                          </li>
                        </ul>
                      </div>
                    );
                }
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
            <img
              src="/assets/google-728.jpg"
              alt=""
              className=""
              width={728}
              height={90}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(SERVER_URI + "/api/sources");
  return {
    props: { ...res.data },
  };
}

export default Authors;
