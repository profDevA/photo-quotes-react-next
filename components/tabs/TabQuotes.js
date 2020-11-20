import { useSelector } from "react-redux";

export default function TabQutoes(props) {
  const { data } = props;
  const storeData = useSelector((store) => store.search);

  return (
    <section
      className="container tab-content container-latest"
      id="tab-1"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      <div className="row pb80 justify-content-md-between">
        {data.Quotes.length > 0 &&
          data.Quotes.map((item, index) => {
            if (!storeData.searchKey) {
              return (
                <div className="col-12 col-lg-6 wow fadeIn" key={index}>
                  <div className="quote mt0">
                    <div className="quote__top">
                      <a href="#" className="tag tag__blue">
                        #art
                      </a>
                      <a href="#" className="tag tag__blue">
                        #photography
                      </a>
                    </div>
                    <div className="quote__center">
                      <p>{`“${item.visibleComments}”`}</p>
                    </div>
                    <div className="quote__bottom">
                      <a className="quote-author" href="#">
                        {}
                      </a>
                      <div className="icons">
                        <span className="counter">7</span>
                        <span className="icon-comment"></span>
                        <span className="icon-share"></span>
                        <span className="like like-gray"></span>
                      </div>
                    </div>
                    <div className="quote__meta">
                      <p className="gray-font">
                        when asked is she had any gems of wisdom for the
                        photographer today., Professional photographer's
                        survival guide by Charles E. Rotkin
                      </p>
                    </div>
                    <div className="quote__meta">
                      <p>
                        ISBN: 0817454098 , Page: 242. This book is available
                        from <span>Amazon.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else if (
              item.visibleComments
                .toLowerCase()
                .includes(storeData.searchKey.toLowerCase())
            ) {
              return (
                <div className="col-12 col-lg-6 wow fadeIn" key={index} key={index}>
                  <div className="quote mt0">
                    <div className="quote__top">
                      <a href="#" className="tag tag__blue">
                        #art
                      </a>
                      <a href="#" className="tag tag__blue">
                        #photography
                      </a>
                    </div>
                    <div className="quote__center">
                      <p>{`“${item.visibleComments}”`}</p>
                    </div>
                    <div className="quote__bottom">
                      <a className="quote-author" href="#">
                        {}
                      </a>
                      <div className="icons">
                        <span className="counter">7</span>
                        <span className="icon-comment"></span>
                        <span className="icon-share"></span>
                        <span className="like like-gray"></span>
                      </div>
                    </div>
                    <div className="quote__meta">
                      <p className="gray-font">
                        when asked is she had any gems of wisdom for the
                        photographer today., Professional photographer's
                        survival guide by Charles E. Rotkin
                      </p>
                    </div>
                    <div className="quote__meta">
                      <p>
                        ISBN: 0817454098 , Page: 242. This book is available
                        from <span>Amazon.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
      <div className="row container justify-content-center">
        <a href="#" className="wide-text btn btn__blue-gradient">
          Load more
        </a>
      </div>
    </section>
  );
}
