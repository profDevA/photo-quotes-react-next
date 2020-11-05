import Head from 'next/head'

export default function Links() {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
                <title>Site Map</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main>
                <ol>
                    <li><a href="/">Home</a></li>
                    <li><a href="one-author">One author</a></li>
                    <li><a href="blogs">Blog</a></li>
                    <li><a href="article-inner">Article inner</a></li>
                    <li><a href="blog">Blog inner</a></li>
                    <li><a href="tag">Tag</a></li>
                    <li><a href="search">Search</a></li>
                    <li><a href="topics">All topics</a></li>
                    <li><a href="authors">All authors</a></li>
                    <li><a href="one-quote">One quote</a></li>
                    <li><a href="one-photo-quote">One photo quote</a></li>
                    <li><a href="about-quotes">About Quotes</a></li>
                    <li><a href="add-quote">Add quote</a></li>
                    <li><a href="add-advertise">Add advertise</a></li>
                    <li><a href="account">Settings</a></li>
                    <li><a href="login">Login/Signup</a></li>
                    <li><a href="fav">Favorites</a></li>
                </ol>
            </main>
            <style jsx>{`
                a, li {
                    font-size: 24px;
                    font-family: Arial, Helvetica, sans-serif;
                    padding: 10px;
                    color: darkslateblue;
                    text-decoration: underline;
                }
        
                main {
                    padding: 50px;
                    display: flex;
                    flex-direction: column
                }
            `}</style>
        </>
    )
}