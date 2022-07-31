import type { NextPage } from 'next'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.css';

const items = [...Array(1000)];

const getRandomNumber = function() {
  return Math.floor(Math.random() * 255)
}

const Card = ({ id } : {id: Number}) => {
  const colorR = getRandomNumber();
  const colorG = getRandomNumber();
  const colorB = getRandomNumber();

  return (
    <div className="card mb-2" style={{border: 0}}>
      <div className="card-body rounded" style={{
        background: `rgb(${colorR}, ${colorG}, ${colorB})`
      }}>
        {`card#${id}`}
        <br />
        {`(${colorR}, ${colorG}, ${colorB})`}
      </div>
    </div>
  )
};

const VirtualScroll: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='container'>
        <div className="row">
          <div className='col'>
            <h1 className="mt-2">Virtual scroll test</h1>
            <p>This is the original condition.</p>
            <hr />
          </div>
        </div>
      </div>

      <div className='container-xxl'>
        {
          items.map((item, index) => (
            <div className="row" key={index} >
              <div className='col'>
                <Card id={index} />
              </div>
              <div className='col'>
                <Card id={index} />
              </div>
              <div className='col'>
                <Card id={index} />
              </div>
              <div className='col'>
                <Card id={index} />
              </div>
              <div className='col'>
                <Card id={index} />
              </div>
              <div className='col'>
                <Card id={index} />
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default VirtualScroll
