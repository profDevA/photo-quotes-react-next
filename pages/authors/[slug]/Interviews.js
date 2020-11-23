import { useState } from "react";
import axios from "axios";
import Footer from "../../../components/footer";
import AuthorContent from "../../../components/authors";
import TabInterviews from "../../../components/tabs/TabInterviews";
import { SERVER_URI } from "../../../constants";
import { useRouter } from "next/router";

export default function Interviews({ source }) {
  const [activeTabId, setActiveTabId] = useState(3);
  const router = useRouter();
  const [tabs, setTabs] = useState([
    "Quotes",
    "Books",
    "Interviews",
    "Articles",
    "Gallery",
  ]);

  console.log(source.slug);
  return (
    <>
      <AuthorContent source={source} />
      <main>
        <section className="container">
          <div className="row tabs-container">
            {tabs.map((tab, i) => {
              return (
                <div
                  key={i}
                  className={activeTabId == i + 1 ? "tab tab__active" : "tab"}
                  data-tab="tab-1"
                  onClick={() => router.push(`/authors/${source.slug}/${tab}`)}
                >
                  <h3 className="tab-item">{tab}</h3>
                  <span className="tab-item__counter">
                    {source[tab] && source[tab].length}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <TabInterviews active={activeTabId == 3 ? true : false} data={source} />

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
