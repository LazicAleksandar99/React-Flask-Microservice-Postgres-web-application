import React from 'react';
import ProductCard from '../components/ProductCard';

const Products= () =>{
  //jedan if sa divom ako je prazno da napravi div bijeli visine 800 i tekstom u sredini
  return (
    <div className="container text-center" style={{paddingTop: "4%", paddingBottom: "2%"}}>       
    <div className=" row" style={{paddingTop: "1rem"}}>
      <div className="col-2" style={{backgroundColor: "#0d6efd", height: 800}}>

      </div>
      <div className="col-9">
        <div className='row' style={{paddingBottom: "7%"}}>
          <div className="col-lg-4">
            <ProductCard></ProductCard>
          </div>
          <div className="col-lg-4">
              <ProductCard></ProductCard>
          </div>
          <div className="col-lg-4">
              <ProductCard></ProductCard>
          </div>
        </div>
        <div className='row'>
          <div className="col-lg-4">
            <ProductCard></ProductCard>
          </div>
          <div className="col-lg-4">
              <ProductCard></ProductCard>
          </div>
          <div className="col-lg-4">
              <ProductCard></ProductCard>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Products;