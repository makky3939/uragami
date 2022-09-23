import type { NextPage } from 'next'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className='container'>
        <ul>
          <li>
            <a href="/virtual_scroll" className='btn btn-link'>virtual scroll</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
