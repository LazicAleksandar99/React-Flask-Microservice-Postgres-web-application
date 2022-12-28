import React , { useState, useEffect} from 'react';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import FilterPanel from '../components/FilterPanel';
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from '../context/product/productApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';
import { selectCurrentProducts } from '../context/product/productSlice';

const Products= () =>{
  //jedan if sa divom ako je prazno da napravi div bijeli visine 800 i tekstom u sredini
  //const [theproducts, setTheProducts] = useState('')
 // const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [data, setData] = useState(useSelector(selectCurrentProducts))
  const [selectedPrice, setSelectedPrice] = useState([1, 10000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  
  const minDistance = 10;
  const token = useSelector(selectCurrentToken)  
  let content  
  const role = JSON.parse(atob(token.split('.')[1])).role
  
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error 
  } = useGetAllProductsQuery(undefined, {refetchOnMountOrArgChange: true});

  const handleChangePrice = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setSelectedPrice([Math.min(newValue[0], selectedPrice[1] - minDistance), selectedPrice[1]]);
    } else {
      setSelectedPrice([selectedPrice[0], Math.max(newValue[1], selectedPrice[0] + minDistance)]);
    }
  };

  const applyFilters = () => {
    
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
  }

  useEffect( () => {
    applyFilters()
  },[selectedPrice])

  if(isLoading){
    content = <div><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br><p>Loading...</p> <br></br></div> 
  }else if(isSuccess){
      const currentPosts = products.products.slice(firstPostIndex, lastPostIndex);
      content = 
      <div className="container text-center" style={{paddingTop: "4%", paddingBottom: "2%"}}>       
        <div className=" row" style={{paddingTop: "1rem"}}>
          <div className="col-3" style={{backgroundColor: "white", height: 800, paddingTop: "2%"}}>
            <div className='home_panelList-wrap'>
          
              <div className='home_panel-wrap'>
                <FilterPanel
                  selectedPrice={selectedPrice}
                  changePrice={handleChangePrice}
                />
              </div>
              {role == "creator" ? <button> <Link to="/new/product" className  ="link-primary">Add new product</Link></button> : <div></div>}
            </div>
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