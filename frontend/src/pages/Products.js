import React , { useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import { useGetAllProductsQuery } from '../context/product/productApiSlice';
import { useDispatch } from 'react-redux';
import { setProducts, selectCurrentProducts } from '../context/product/productSlice';

const Products= () =>{
  //jedan if sa divom ako je prazno da napravi div bijeli visine 800 i tekstom u sredini
  //const [theproducts, setTheProducts] = useState('')
  const [getAllProducts] = useGetAllProductsQuery()
  const dispatch = useDispatch()

  useEffect( async () => {
    console.log("GRIZMAN")
    try{
      const response = await getAllProducts()
      console.log("KILJAN MEBAPE")
      console.log(response)
      if(response?.data[0]?.error){
        alert(response?.data[0]?.error)
      }
      else if(response?.data[0]?.msg){
        alert(response?.data[0]?.msg)
      }
      else if(response?.data[0]?.token){
        dispatch(setProducts({...response?.data[0]}))
        ////setTheProducts(selectCurrentProducts())
        console.log("UPAMEKANO")
        console.log(response)
      }
    }catch(msg){

    }
  }, [])

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