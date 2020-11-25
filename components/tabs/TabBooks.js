import { SERVER_URI } from "../../constants";
import { useSelector } from "react-redux";

export default function TabBooks(props) {
  const { data } = props;
  const storeData = useSelector((store) => store.search);
  return (
    <section
      className="container tab-content"
      id="tab-2"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      <div className="row books-container flex-wrap">
      {data.Books.length > 0 &&
        data.Books.map((item, index) => {
          if (!storeData.searchKey) {
            return (
              
                <div className="col-lg-3 col-sm-6 col-12"  key={index}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book__cover" style={{width: '70%'}}>
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
                              src="/assets/icons/amazon.svg"
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
                      <p className="book__number pt-4">ISBN 2-266-11156</p>
                      <a className="book__author text18">{item.author}</a>
                    </div>
                  </div>
                </div>
           
            );
          } else if (
            item.title.toLowerCase().includes(storeData.searchKey.toLowerCase()) || 
            item.author.toLowerCase().includes(storeData.searchKey.toLowerCase()) 
          ) {
            return (
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="book">
                    <div className="book-top">
                      <div className="book__cover" style={{width: '70%'}}>
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
            );
          }
        })}
           </div>
    </section>
  );
}
