import React , { useState, useEffect} from 'react';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from '../context/product/productApiSlice';

const Products= () =>{
  //jedan if sa divom ako je prazno da napravi div bijeli visine 800 i tekstom u sredini
  //const [theproducts, setTheProducts] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  let content  
  
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error 
  } = useGetAllProductsQuery(undefined, {refetchOnMountOrArgChange: true});

  if(isLoading){
    content = <div><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br></div> 
  }else if(isSuccess){
    
    console.log(products)
      const currentPosts = products.products.slice(firstPostIndex, lastPostIndex);
      content = 
      <div className="container text-center" style={{paddingTop: "4%", paddingBottom: "2%"}}>       
        <div className=" row" style={{paddingTop: "1rem"}}>
          <div className="col-2" style={{backgroundColor: "#0d6efd", height: 800}}>
            <button> <Link to="/add/product" className="link-primary">Add new product</Link></button>
          </div>
          <div className="col-9">
            <ProductList productsData={currentPosts} />
              <Pagination
                  totalPosts={products.products.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
              />
          </div>
        </div>
      </div>
      
  }else if(isError){
    content = <p>Error</p>
  }

  return (
    content
  )
}
export default Products;