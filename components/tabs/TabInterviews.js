import { SERVER_URI } from "../../constants";
import parse from "html-react-parser";
import { useRouter } from "next/router";

export default function TabIntervies(props) {
  const { data, route } = props;
  let fullName = `${data.firstName} ${data.middleName} ${data.lastName}`;
  if (fullName.includes(null)) {
    fullName = fullName.replace(null, "");
  }

  const router = useRouter()

  const showInterview = (title) => {
    router.push(`${route}/${title}`)
  }
  return (
    <section
      className="container tab-content"
      id="tab-3"
      style={props.active ? { display: "block" } : { display: "none" }}
    >
      <div className="row interviews-container">
        {props.data.Interviews.length > 0 &&
          props.data.Interviews.map((item, index) => (
            <div className="col-12 col-lg-6 pb-5" key={index} onClick={()=>showInterview(item.title.replace(" ","-"))} key={index}>
              <div className="interview row">
                <div className="col interview-cover">
                  <img
                    className="circle-cover"
                    src={`${SERVER_URI}/uploads/${item.featured_image}`}
                  />
                </div>
                <div className="col">
                  <div className="interview-title">
                    <a className="title" href="#">
                      {item.title}
                    </a>
                  </div>
                  <div className="interview-desc">
                    {parse(item.text)}
                    <a href="#" className="interview-meta">
                      About <span>{fullName}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
