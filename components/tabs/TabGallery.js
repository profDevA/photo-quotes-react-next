import Image from 'next/image'

export default function TabGallery(props) {
    return (
        <section className="tab-content" id="tab-5" style={props.active?{display:'block'}:{display:'none'}}>
            <div className="row gallery-container">
                <div className="col-md-6 col-12 gallery-col">
                    <div className="gallery-item">
                        {/* <img src="/assets/gal1.jpg" alt="" /> */}
                        <Image src={'/assets/gal1.jpg' } unsized/>
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                    <div className="gallery-item">
                        <Image src="/assets/gal3.jpg" alt="" unsized />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                    <div className="gallery-item">
                        <Image src="/assets/gal5.jpg" alt="" unsized />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                </div>
                <div className="col-md-6 col-12 gallery-col">
                    <div className="gallery-item">
                        <Image src="/assets/gal2.jpg" alt="" unsized />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                    <div className="gallery-item">
                        <Image src="/assets/gal4.jpg" alt="" unsized />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                    <div className="gallery-item">
                        <Image src="/assets/gal6.jpg" alt="" unsized />
                        <span className="gallery-info">Madrid, 1933</span>
                    </div>
                </div>
            </div>
        </section>
    )
}