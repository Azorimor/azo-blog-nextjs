import '../styles/globals.scss'
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/vela-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { AppProps } from 'next/app'
import React from 'react';
import SiteLayout from '../components/layouts/siteLayout';

function App({ Component, pageProps }: AppProps) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}

export default App
