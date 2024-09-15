import React from 'react';
import card1 from '../pages/card1.webp';
import card2 from '../pages/card2.webp';
import card3 from '../pages/card3.jpg';
import card4 from '../pages/card4.webp';
import backgroundImage from '../pages/Homepage.jpg'


function Featured() {
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
          <div className="card" style={{ width: '18rem', border: "4px solid orangered " }}>
            <img src={card1} className="card-img-top" alt="card" style={{ width: 200, height: 300, marginLeft: 50 }} />
            <div className="card-body">
              <h5 className="card-title">JBL LIVE BEAM 3</h5>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', marginLeft: 50, border: "4px solid orangered " }}>
            <img src={card2} className="card-img-top" alt="card" style={{ width: 200, height: 300, marginLeft: 50 }} />
            <div className="card-body">
              <h5 className="card-title">JBL PartyBox Club 120</h5>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', marginLeft: 50, border: "4px solid orangered " }}>
            <img src={card3} className="card-img-top" alt="card" style={{ width: 200, height: 300, marginLeft: 50 }} />
            <div className="card-body">
              <h5 className="card-title">JBL PartyBox Stage 320</h5>
            </div>
          </div>

          <div className="card" style={{ width: '18rem', marginLeft: 50, border: "4px solid orangered " }}>
            <img src={card4} className="card-img-top" alt="card" style={{ width: 200, height: 300, marginLeft: 50 }} />
            <div className="card-body">
              <h5 className="card-title">JBL FLIP 6</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
