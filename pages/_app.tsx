import '../styles/globals.scss'
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/vela-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
