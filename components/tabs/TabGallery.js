import Image from "next/image";
import {getTime} from '../../constants'

export default function TabGallery({ source, active }) {
  let fullName = `${source.firstName} ${source.middleName} ${source.lastName}`;
  if (fullName.includes(null)) {
    fullName = fullName.replace(null, "");
  }



  return (
    <section
      className="tab-content"
      id="tab-5"
      style={active ? { display: "block" } : { display: "none" }}
    >
      <div className="row gallery-container">
        {source.Gallery.length > 0 &&
          source.Gallery.map((item, index) => {
            return (
              <div className="col-md-6 col-12 gallery-col pb-5" key={index}>
                <div className="gallery-item">
                  {/* <img src="/assets/gal1.jpg" alt="" /> */}
                  <img src={item.url} />
                  <span className="gallery-info">{fullName}, {getTime(item.created_at)}</span>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
