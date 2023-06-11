import './page.css'
import img1 from '../images/buddima2.jpeg'
import img3 from '../images/chmr.png'
import img4 from '../images/mn.png'
import img2 from '../images/thrka2.png'
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3 text-color3" style={{ border: "none", display: "flex", justifyContent: "center" }}>
      <div className='container' style={{ border: "none", width: "100%", maxWidth: "1200px" }}>
      <b>
        <h3>Devloped by "Angular Whiplash" from university of Moratuwa.</h3><br/>
        <div className="fp">
      <div className="fpItem">
        <img
          src={img1}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Kumari H.K.B.K.</span>
        <h5>Group leader</h5>
        <div className="fpRating" style={{ fontSize: 14 }} >
          <button>kumarihkbk.20@uom.lk</button>
        </div>
      </div>
      <div className="fpItem">
      <img
    src={img2}
    alt=""
    className="fpImg"
  />
  <span className="fpName">Rambukkamage R.D.S.T. </span>
  <div className="fpRating" style={{ fontSize: 14, width: '120px' }}>
    <button>rambukkamagerdst.20@uom.lk</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img3}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Pallikonda D.C.P.</span>
        <div className="fpRating" style={{ fontSize: 14 }} >
          <button>pallikondadcp.20@uom.lk</button>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img4}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Prince J.B.T.S.</span>
        <div className="fpRating" style={{ fontSize: 14 }} >
          <button>princejbts.20@uom.lk</button>
         
  
        </div>
      </div>
    </div>
       </b>
       <hr></hr>
       <h3>Special thanks for Mr Kavinda and Mr Mahesh from Sutra Technologies.</h3>
       <Footer></Footer>
       </div>
    </div>
  );
};

export default ContactUs;
