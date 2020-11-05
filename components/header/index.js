import React from 'react'
import Head from 'next/head'
import Filter from '../../components/filter'
import Menu from '../../components/menu'
import Image from 'next/image'

const Header = () => {
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
                                <Image src="assets/logo.png" alt="Logo" unsized />
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
        </>
    )
}

export default Header;