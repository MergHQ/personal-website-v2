import Head from 'next/head'
import App from './app'

import './style.scss'

function Index() {
  return (
    <div>
      <Head>
        <title>Hugo Holmqvist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <App />
    </div>
  )
}

export default Index
