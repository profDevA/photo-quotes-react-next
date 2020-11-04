export default function TabGallery(props) {
    return (
        <section className="tab-content" id="tab-5" style={props.active?{display:'block'}:{display:'none'}}>
            <div className="row gallery-container">
                <div className="col-md-6 col-12 gallery-col">
                    <div className="gallery-item">
                        <img src="assets/gal1.jpg" alt="" />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                    <div className="gallery-item">
                        <img src="assets/gal3.jpg" alt="" />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                    <div className="gallery-item">
                        <img src="assets/gal5.jpg" alt="" />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                </div>
                <div className="col-md-6 col-12 gallery-col">
                    <div className="gallery-item">
                        <img src="assets/gal2.jpg" alt="" />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                    <div className="gallery-item">
                        <img src="assets/gal4.jpg" alt="" />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                    <div className="gallery-item">
                        <img src="assets/gal6.jpg" alt="" />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                </div>
            </div>
        </section>
    )
}