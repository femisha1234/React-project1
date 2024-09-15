import React from 'react'
import card1 from '../pages/card1.webp';
import backgroundImage from '../pages/Homepage.jpg'



function Headphone() {
  return (
   <>
   <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '1000px',
        width: '100%'
      }}>
   <h1 style={{ fontFamily: 'serif', marginTop: 10 }}>BEST SELLERS</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: 50, marginLeft: 50 }}>
        <div className="card" style={{ width: '18rem' ,border:"4px solid orangered "}}>
          <img src={card1} className="card-img-top" alt="card" style={{ width: 200, height: 300 ,marginLeft:50}} />
          <div className="card-body">
            <h5 className="card-title">JBL LIVE BEAM 3</h5>
            <h6>Rs.14,049</h6>
            <p>Hi-Res Audio True ANC TWS,Smart Case with Touch Display,48H Playtime,Wireless Charging,6 Mic,Multipoint Connection, Ip55 Proof, in Ear Headphones App, Personi-Fi 3.0 (Grey)</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem',marginLeft:50,border:"4px solid orangered " }}>
          <img src="https://m.media-amazon.com/images/I/61FUX7QmifS._AC_UF1000,1000_QL80_.jpg" className="card-img-top" alt="card" style={{ width: 200, height: 300,marginLeft:50 }} />
          <div className="card-body">
            <h5 className="card-title">JBL Tune 501BT</h5>
            <h6>Rs.3,599</h6>
            <p>JBL Tune 520 BT 57Hr Playtime, Pure Bass, Multi Connect Bluetooth Headset, BT 5.3LE Bluetooth Headset  (Blue, On the Ear)</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem',marginLeft:50 ,border:"4px solid orangered "}}>
          <img src="https://x.imastudent.com/content/0050326_jbl-live-pro-2-noise-canceling-true-wireless-in-ear-headphones_500.jpeg" className="card-img-top" alt="card" style={{ width: 200, height: 300,marginLeft:50 }} />
          <div className="card-body">
            <h5 className="card-title">JBL Live Pro 2 TWS</h5>
            <h6>Rs.9,999</h6>
            <p> ANC Earbuds, 40Hr Playtime, Dual Connect, Customized Bass with Headphones App, 6 Mics for Clear Calls, Wireless Charging, Alexa Built-in (Black)</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem',marginLeft:50,border:"4px solid orangered "}}>
          <img src="https://m.media-amazon.com/images/I/61Vc14MtETL.jpg" className="card-img-top" alt="card" style={{ width: 200, height: 300, marginLeft:50 }} />
          <div className="card-body">
            <h5 className="card-title">JBL Tour One M2</h5>
            <h6>Rs.17,500</h6>
            <p>JBL Tour One M2, Adaptive ANC, Smart Ambient, Up to 50Hr, Pro Sound, JBL App, 4-Mic, Bluetooth Headset  (Champagne, On the Ear)</p>
          </div>
        </div>
      </div>
      </div>
    </>

  )
}

export default Headphone