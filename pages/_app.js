import { ThemeProvider } from '@emotion/react'
import '../styles/globals.css'
import themes from '../lib/themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes}>
    <Component {...pageProps} />
  </ThemeProvider>
    )
}

export default MyApp
