import Head from 'next/head'
import Filter from '../../components/filter'
import Menu from '../../components/menu'
import Image from 'next/image'

export default function WhiteHeader() {
    return (
        <>
            <Head>
                <title>Photo Quotes</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <section class="hero-bg" style={{backgroundImage: "url('assets/blog-bg.jpg')"}}>
                <header className="container-fluid header__transparent">
                    <div className="container">
                        <div className="top-header__white top-header">
                            <div className="top-header__left">
                                <a href="index.html">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Logo Image"
                                    unsized
                                />
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
                    <Filter />
                </header>
            </section>
        </>
    )
}