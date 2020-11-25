import { useState, useEffect } from 'react'
import { useStore } from '../redux/store'
import { Provider } from 'react-redux'
import '../styles/fonts.scss'
import '../styles/lib/grid.css'
import '../styles/lib/selectize.css'
import 'animate.css/animate.min.css'
import '../styles/style.scss'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

export function reportWebVitals(metric) {
}

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  useEffect(() => {
    new WOW().init();
  }, []);
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
