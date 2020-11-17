import { useState } from 'react'
import Head from 'next/head'

export default function Login() {
    const [tabStat, setTabStat] = useState('login');
    const setPageStat = (page) => {
        setTabStat(page)
    }
    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
                <title>Login - PhotoQuotes</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="o-hidden rel md-no-rel">
                <header className="container-fluid header__transparent header__fixed">
                    <div className="container">
                        <div className="top-header">
                            <div className="top-header__left">
                                <a href="index.html">
                                    <img src="assets/logo-white.png" alt="Logo" />
                                </a>
                            </div>
                            <div className="top-header__right">
                                <div className="menu-icon">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="half-image__bg " data-tab="tab-1" style={tabStat !== 'login' ? {display:'none'} : {}}></div>
                <div className="half-image__bg " style={tabStat == 'signup' ? { backgroundImage: 'url(/assets/signup-bg.jpg)' } : {display:'none'}} data-tab="tab-2"></div>
                <section className="container row vh100">
                    <div className="col-lg-6 offset-r-50 h-100" >
                        <div className="half-image__content" data-tab="tab-1" style={tabStat !== 'login' ? {display:'none'} : {}}>
                            <div className="maxw-500 d-lg-block d-none">
                                <img src="assets/icons/quotes-white.svg" alt="" />
                                <p className="fs40 white-font bold mt30">
                                    It is or should be a significant document, a penetrating statement, which can be described in a very simple term.
                                </p>
                                <p className="mt40 text20 white-font">Berenice Abbott</p>
                            </div>
                        </div>
                        <div className="half-image__content" data-tab="tab-2" style={tabStat !== 'signup' ? {display:'none'} : {}}>
                            <div className="maxw-460 d-lg-block d-none">
                                <h2 className="big-lettering white-font">Create</h2>
                                <h1 className="main-title white-font">your personal quote collections</h1>
                                <div className="row mt40">
                                    <div className="col text18 white-font">
                                        <img src="assets/icons/plus.svg" alt="" />
                                    </div>
                                    <div className="col-11 text18 white-font">Easily favorite quotes on our site</div>
                                </div>
                                <div className="row mt10">
                                    <div className="col text18 white-font">
                                        <img src="assets/icons/plus.svg" alt="" />
                                    </div>
                                    <div className="col-11 text18 white-font">Organize multiple quote collections</div>
                                </div>
                                <div className="row mt10">
                                    <div className="col text18 white-font">
                                        <img src="assets/icons/plus.svg" alt="" />
                                    </div>
                                    <div className="col-11 text18 white-font">Access collections on all of your devices</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  offset-l-50 auth-container">
                        <section className="maxw-460">
                            <div className="row tabs-container">
                                <div className="tab" data-tab="tab-1">
                                    <h3 className="tab-item main-title" onClick={() => setPageStat('login')}>Log In</h3>
                                </div>
                                <div className="tab" data-tab="tab-2">
                                    <h3 className="tab-item main-title" onClick={() => setPageStat('signup')}>Sign Up</h3>
                                </div>
                            </div>
                        </section>

                        <section className="maxw-460 tab-content pt60" id="tab-1" style={tabStat !== 'login' ? {display:'none'} : {}}>
                            <form action="">
                                <label className="text16 gray-font">
                                    Email
                                    <input type="email" placeholder="Email" className="d-block gray-form__elem mt10" name="email" id="emailLog" />
                                </label>
                                <label htmlFor="emailLog" generated="true" className="error message"></label>

                                <label className="text16 gray-font mt30 d-block">
                                    <div className="d-flex justify-content-between">
                                        Password
                                    <a className="text16 blue-font rel" href="#">Forgot password</a>
                                    </div>
                                    <input type="password" placeholder="Password" className="d-block gray-form__elem mt10" id="passLog" name="pass" />
                                </label>
                                <label htmlFor="passLog" generated="true" className="error message"></label>

                                <div className="d-flex">
                                    <button type="submit" className="btn wide-text btn__blue-gradient mt30 d-block btn-sm-50">Send</button>
                                    <button className="btn wide-text btn__dark-blue mt30 ml20 btn-sm-50">
                                        <span className="icon-fb mr-md-3 mr-sm-2"></span>
                                        Log In
                                    </button>
                                </div>
                            </form>
                        </section>

                        <section className="maxw-460 tab-content pt60" id="tab-2" style={tabStat !== 'signup' ? {display:'none'} : {}}>
                            <form action="" className="signup-form">
                                <label className="text16 gray-font">
                                    Email
                                    <input type="email" placeholder="Email" className="d-block gray-form__elem mt10" name="email" id="email" />
                                </label>
                                <label htmlFor="email" generated="true" className="error message"></label>

                                <label className="text16 gray-font mt30 d-block">
                                    Password
                                    <input type="password" placeholder="Password" className="d-block gray-form__elem mt10" name="passCreate" id="pass" />
                                </label>
                                <label htmlFor="pass" generated="true" className="error message"></label>

                                <div className="wrapper-check">
                                    <input type="checkbox" id="check-1" className="terms" />
                                    <label className="checkbox-container text16 mt30" htmlFor="check-1">
                                        <span className="checkmark"></span>
                                        I am 13 years of age or older
                                    </label>
                                </div>
                                <div className="wrapper-check">
                                    <input type="checkbox" id="check-2" className="terms" />
                                    <label className="checkbox-container text16 mt10" htmlFor="check-2">
                                        <span className="checkmark"></span>
                                            I agree to the <a href="" className="blue-font">Terms of Service</a> and the <a href="" className="blue-font">Privacy Policy</a>
                                    </label>
                                </div>
                                <div className="d-flex">
                                    <button disabled type="submit" className="btn wide-text btn__blue-gradient mt30 d-block btn-sm-50">Send</button>
                                    <button className="btn wide-text btn__dark-blue mt30 ml20 btn-sm-50">
                                        <span className="icon-fb mr-md-3 mr-sm-2"></span>
                                        Log In
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}