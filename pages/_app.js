import {useState, useEffect} from 'react'
import '../styles/fonts.scss'
import '../styles/lib/grid.css'
import 'animate.css/animate.min.css'
import '../styles/style.scss'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    new WOW().init();
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
