import React from 'react';
import "../assets/styles/Home.css"
import news from "../assets/images/news.png"
const Home= () =>{

  return (
    <div>
      <div className="headline-background">
         <div className="container">
            <div className='row'>
              <div className='col'>
                <img className="headline-img" src={news} alt="slika"></img>
              </div>
              <div className='col'>
                <h1 className="headline-text">For new informations <br></br> Stay connected</h1>
              </div>
            </div>
         </div>
      </div>
      <div className="container text-center" style={{paddingTop: "2%"}}>
        
        <div className="rounded border border-primary row" style={{paddingTop: "1rem"}}>
          <div className="col">
          </div>
          <div className="col-8">

            <div className="row">
              <div className="col-3">
              <img src="http://placekitten.com/150/150" alt="ljubi brat" style={{borderRadius: "50%"}}></img>
              </div>
              <div className="col-9">
                <h5>Nvidia GPU 4.512v DISCOUNT!</h5>
                <p style={{textAlign: "left"}}>ovdje ide text asjdlsa;kdjas; ajs ;a;skd j;asd jasd;k asjl;d jaslk;dkjl; askjl;asdjk asdj lhfg askjdhas ksahd asdl asldh</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
              <img src="http://placekitten.com/150/150" alt="ljubi brat" style={{borderRadius: "50%"}}></img>
              </div>
              <div className="col-9">
                <h5>Nvidia GPU 4.512v DISCOUNT!</h5>
                <p style={{textAlign: "left"}}>ovdje ide text asjdlsa;kdjas; ajs ;a;skd j;asd jasd;k asjl;d jaslk;dkjl; askjl;asdjk asdj lhfg askjdhas ksahd asdl asldh</p>
              </div>
            </div><div className="row">
              <div className="col-3">
              <img src="http://placekitten.com/150/150" alt="ljubi brat" style={{borderRadius: "50%"}}></img>
              </div>
              <div className="col-9">
                <h5>Nvidia GPU 4.512v DISCOUNT!</h5>
                <p style={{textAlign: "left"}}>ovdje ide text asjdlsa;kdjas; ajs ;a;skd j;asd jasd;k asjl;d jaslk;dkjl; askjl;asdjk asdj lhfg askjdhas ksahd asdl asldh</p>
              </div>
            </div><div className="row">
              <div className="col-3">
              <img src="http://placekitten.com/150/150" alt="ljubi brat" style={{borderRadius: "50%"}}></img>
              </div>
              <div className="col-9">
                <h5>Nvidia GPU 4.512v DISCOUNT!</h5>
                <p style={{textAlign: "left"}}>ovdje ide text asjdlsa;kdjas; ajs ;a;skd j;asd jasd;k asjl;d jaslk;dkjl; askjl;asdjk asdj lhfg askjdhas ksahd asdl asldh</p>
              </div>
            </div><div className="row">
              <div className="col-3">
              <img src="http://placekitten.com/150/150" alt="ljubi brat" style={{borderRadius: "50%"}}></img>
              </div>
              <div className="col-9">
                <h5>Nvidia GPU 4.512v DISCOUNT!</h5>
                <p style={{textAlign: "left"}}>ovdje ide text asjdlsa;kdjas; ajs ;a;skd j;asd jasd;k asjl;d jaslk;dkjl; askjl;asdjk asdj lhfg askjdhas ksahd asdl asldh</p>
              </div>
            </div>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default Home;