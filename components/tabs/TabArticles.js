import { SERVER_URI } from "../../constants";
import parse from 'html-react-parser';
import {useRouter} from 'next/router'

export default function TabArticles(props) {
  
  const router = useRouter();
  const showArticle = (title) => {
    console.log(`${props.route}/${title}`)
    router.push(`${props.route}/${title}`)
  }
  return (
    <section
      className="tab-content container container-blog"
      id="tab-4"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      <div className="row" >
        {props.data.Articles.length > 0 && props.data.Articles.map((item, index)=>(
          <div className="col-xl-4 col-md-6" onClick={()=>showArticle(item.title.replace(" ","-"))} key={index}>
            <div className="article article__offset">
              <div className="article-cover">
                <img src={`${SERVER_URI}/uploads/${item.featured_image}`} alt="" />
                <div className="cover__hover">
                  <a href="#" className="cover__hover-img" >
                    <img src="/assets/icons/arrow.svg" alt="Go" />
                  </a>
                </div>
              </div>
              <div className="article-top">
                <a
                  className="article-top__title title"                  
                >
                  {item.title}
                </a>
              </div>
              <div className="article-content">
                <p className="article-content__text text18">
                {parse(item.text)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="row container-more">
        <a href="#" className="wide-text btn btn__blue-gradient">
          More articles
        </a>
      </div> */}
    </section>
  );
}

