export default function TabIntervies(props) {
    return (
        <section className="container tab-content" id="tab-3" style={props.active ? { display: 'block' } : { display: 'none' }}>
            <div className="row interviews-container">
                <div className="col-12 col-lg-6">
                    <div className="interview row">
                        <div className="col interview-cover">
                            <img className="circle-cover" src="/assets/inter1.jpg" />
                        </div>
                        <div className="col">
                            <div className="interview-title">
                                <a className="title" href="#">Interview with ASMP Founder: Berenice Bla blabla Bla</a>
                            </div>

                            <div className="interview-desc">
                                <p className="text">Editors Note: Work of ASMP Founder, Berenice Abbott, is currently being highlighted in “Women’s Art” project. See her previous ASMP interview below.</p>
                                <a href="#" className="interview-meta">About <span>Abbott Berenice</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="interview row">
                        <div className="col interview-cover">
                            <img className="circle-cover" src="/assets/inter2.jpg" />
                        </div>
                        <div className="col">
                            <div className="interview-title">
                                <a href="#" className="title">Interview with ASMP Founder: Berenice…</a>
                            </div>

                            <div className="interview-desc">
                                <p className="text">Editors Note: Work of ASMP Founder, Berenice Abbott, is currently being</p>
                                <a href="#" className="interview-meta">About <span>Abbott Berenice</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="interview row">
                        <div className="col interview-cover">
                            <img className="circle-cover" src="/assets/inter3.jpg" />
                        </div>
                        <div className="col">
                            <div className="interview-title">
                                <a href="#" className="title">Interview with ASMP Founder: Berenice…</a>
                            </div>

                            <div className="interview-desc">
                                <p className="text">Editors Note: Work of ASMP Founder, Berenice Abbott, is currently being</p>
                                <a href="#" className="interview-meta">About <span>Abbott Berenice</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="interview row">
                        <div className="col interview-cover">
                            <img className="circle-cover" src="/assets/inter4.jpg" />
                        </div>
                        <div className="col">
                            <div className="interview-title">
                                <a href="#" className="title">Interview with ASMP Founder: Berenice…</a>
                            </div>

                            <div className="interview-desc">
                                <p className="text">Editors Note: Work of ASMP Founder, Berenice Abbott, is currently being</p>
                                <a href="#" className="interview-meta">About <span>Abbott Berenice</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="interview row">
                        <div className="col interview-cover">
                            <img className="circle-cover" src="/assets/inter5.jpg" />
                        </div>
                        <div className="col">
                            <div className="interview-title">
                                <a href="#" className="title">Interview with ASMP Founder: Berenice…</a>
                            </div>

                            <div className="interview-desc">
                                <p className="text">Editors Note: Work of ASMP Founder, Berenice Abbott, is currently being</p>
                                <a href="#" className="interview-meta">About <span>Abbott Berenice</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="interview row">
                        <div className="col interview-cover">
                            <img className="circle-cover" src="/assets/inter6.jpg" />
                        </div>
                        <div className="col">
                            <div className="interview-title">
                                <a href="#" className="title">Interview with ASMP Founder: Berenice…</a>
                            </div>

                            <div className="interview-desc">
                                <p className="text">Editors Note: Work of ASMP Founder, Berenice Abbott, is currently being</p>
                                <a href="#" className="interview-meta">About <span>Abbott Berenice</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}