import Head from 'next/head'
import Image from 'next/image'
import Menu from '../components/menu'
import Footer from '../components/footer'

export default function Account() {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
                <title>Photo Quotes</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <header className="container-fluid">
                <div className="container">
                    <div className="top-header">
                        <div className="top-header__left">
                            <a href="/">
                                <Image src="/assets/logo.png" alt="Logo" unsized />
                            </a>
                        </div>
                        <Menu />
                        <div className="top-header__right">
                            <a href=""><span className="icon-user"></span></a>
                            <div className="menu-icon">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="container pt80 pb120">
                    <h1 className="main-title">My Account</h1>
                    <div className="row mt40 container-offset-50">
                        <div className="col-md-6">
                            <h3 className="text45">Profile</h3>
                            <div className="mt40">
                                <h4 className="title">Change mail</h4>
                                <form action="" className="mt30">
                                    <label className="text16 gray-font">
                                        E-Mail
                           <input type="email" placeholder="E-mail" name="email" className="d-block gray-form__elem mt10" id="acc-email" />
                                    </label>
                                    <label htmlFor="acc-email" generated="true" className="error message"></label>
                                    <span className="text18 gray-font mt20 d-block">
                                        Note: For National Geographic - Field Guide by Peter K. Burian and Robert Caputo
                       </span>
                                    <button type="submit" className="btn wide-text btn__blue-gradient mt30 d-block mx-auto mx-md-0">Change Email</button>
                                </form>
                                <div className="gray-line mt60"></div>
                            </div>
                            <div className="mt40">
                                <h4 className="title">Change password</h4>
                                <form action="" className="mt30">
                                    <label className="text16 gray-font">
                                        Password
                           <input type="password" placeholder="Password" className="d-block gray-form__elem mt10" name="passCreate" id="pass" />
                                    </label>
                                    <label htmlFor="pass" generated="true" className="error message"></label>

                                    <label className="text16 gray-font mt10 d-block">
                                        Confirm Password
                           <input type="password" placeholder="Confirm Password" className="d-block gray-form__elem mt10" name="confPass" id="confPass" />
                                    </label>
                                    <label htmlFor="confPass" generated="true" className="error message"></label>

                                    <button type="submit" className="btn wide-text btn__blue-gradient mt30 d-block mx-auto mx-md-0">Change Password</button>
                                </form>
                                <div className="gray-line mt60 d-md-none"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className="text45">Account Manager</h3>
                            <div className="mt40">
                                <h4 className="title">Download My Account Data</h4>
                                <span className="text18 gray-font mt20 d-block">
                                    Google is about to drop several new products on us, but we’re still not sure if its strategy makes sense
                   </span>
                                <button className="btn wide-text btn__blue-gradient mt30 d-block mx-auto mx-md-0">Download Data</button>
                                <div className="gray-line mt60"></div>
                            </div>
                            <div className="mt40">
                                <h4 className="title">Delete My Account</h4>
                                <span className="text18 gray-font mt20 d-block">
                                    Google is about to drop several new products on us, but we’re still not sure if its strategy makes sense
                   </span>
                                <button className="btn wide-text btn__pink-gradient mt30 d-block mx-auto mx-md-0">Delete Account</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}