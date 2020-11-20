import { SERVER_URI } from "../../constants";
import { useSelector } from "react-redux";

export default function TabBooks(props) {
  const { data } = props;
  const storeData = useSelector((store) => store.search);
  console.log(data);
  return (
    <section
      className="container tab-content"
      id="tab-2"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      {data.Books.length > 0 &&
        data.Books.map((item, index) => {
          if (!storeData.searchKey) {
            return (
              <div className="row books-container justify-content-between" key={index}>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="book">
                    <div className="book-top">
                      <div className="book__cover">
                        <img
                          src={`${SERVER_URI}/uploads/${item.bookImage}`}
                          alt="Book"
                        />
                        <div className="cover__hover">
                          <a
                            className="cover__hover-text"
                            href={item.amazonUrl}
                          >
                            <img
                              src="../assets/icons/amazon.svg"
                              alt="Amazon"
                            />
                            <p>Buy at Amazon</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="book-bottom">
                      <a className="book__name title" href="#">
                        {item.title}
                      </a>
                      <p className="book__number">ISBN 2-266-11156</p>
                      <a className="book__author text18">{item.author}</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (
            item.title.toLowerCase().includes(storeData.searchKey.toLowerCase())
          ) {
            return (
              <div className="row books-container justify-content-between" key={index}>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="book">
                    <div className="book-top">
                      <div className="book__cover">
                        <img
                          src={`${SERVER_URI}/uploads/${item.bookImage}`}
                          alt="Book"
                        />
                        <div className="cover__hover">
                          <a
                            className="cover__hover-text"
                            href={item.amazonUrl}
                          >
                            <img
                              src="../assets/icons/amazon.svg"
                              alt="Amazon"
                            />
                            <p>Buy at Amazon</p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="book-bottom">
                      <a className="book__name title" href="#">
                        {item.title}
                      </a>
                      <p className="book__number">ISBN 2-266-11156</p>
                      <a className="book__author text18">{item.author}</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </section>
  );
}
