import React from 'react'
import backgroundImage from '../pages/Homepage.jpg'


function Speaker() {
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
       <img src="https://media.croma.com/image/upload/v1675868043/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/232241_0_vpo8cg.png" className="card-img-top" alt="card" style={{ width: 200, height: 300 ,marginLeft:50}} />
       <div className="card-body">
         <h5 className="card-title">JBL Boombox 2 Deep Bass</h5>
         <h6>Rs.34,999/-</h6>
         <p>24Hr Playtime,IPX7 Rating,10000mAh Powerbank,Portable 80 W Bluetooth Speaker (Black, Stereo Channel)</p>
       </div>
     </div>

     <div className="card" style={{ width: '18rem',marginLeft:50,border:"4px solid orangered " }}>
       <img src="https://ca.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwb9114272/JBL_Clip3_Hero_Forest_Green-1605x1605px.png?sw=537&sfrm=png" className="card-img-top" alt="card" style={{ width: 200, height: 300,marginLeft:50 }} />
       <div className="card-body">
         <h5 className="card-title">JBL Clip 3 Portable Waterproof Wireless</h5>
         <h6>
          Rs.4,499
         </h6>
         <p>Speaker with Mic, JBL Signature Sound, Integrated Carabiner, Vibrant Color Options with IPX7 Waterproof & AUX (Black)</p>
       </div>
     </div>

     <div className="card" style={{ width: '18rem',marginLeft:50 ,border:"4px solid orangered "}}>
       <img src="https://m.media-amazon.com/images/I/81UgecGwckL.jpg" className="card-img-top" alt="card" style={{ width: 200, height: 300,marginLeft:50 }} />
       <div className="card-body">
         <h5 className="card-title">JBL GO2 - Waterproof Ultra-Portable</h5>
         <h6>Rs.2,049</h6>
         <p>Go Essential with Rich Bass, 5 Hrs Playtime, IPX7 Waterproof, Ultra Portable 3.1 W Bluetooth Speaker  (Black, Mono Channel)</p>
       </div>
     </div>

     <div className="card" style={{ width: '18rem',marginLeft:50,border:"4px solid orangered "}}>
       <img src="https://www.jbl.co.nz/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw9617f3b3/JBL_EON710_Front_Straight_1605x1605.png?sw=537&sfrm=png" className="card-img-top" alt="card" style={{ width: 200, height: 300, marginLeft:50 }} />
       <div className="card-body">
         <h5 className="card-title">JBL EON710</h5>
         <h6>Rs.46,500</h6>
         <p>JBL Professional EON710 10-inch Powered PA Speaker with Bluetooth (Black)</p>
       </div>
     </div>
   </div>
   </div>
 </> 

  )
}

export default Speaker