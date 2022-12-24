import React , { useState, useEffect} from 'react';
import ProductList from '../components/ProductList';
import Pagination from '../components/Pagination';
import { useGetAllProductsQuery,useAddProductMutation } from '../context/product/productApiSlice';
import { useDispatch } from 'react-redux';
import { setProducts } from '../context/product/productSlice';

const Products= () =>{
  //jedan if sa divom ako je prazno da napravi div bijeli visine 800 i tekstom u sredini
  //const [theproducts, setTheProducts] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const [addProduct] = useAddProductMutation();
  
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error 
  } = useGetAllProductsQuery(undefined, {refetchOnMountOrArgChange: true});

  const dispatch = useDispatch()

  useEffect(  () => {
    if(!isLoading){
      dispatch(setProducts(products.products));
    }
  }, [isLoading])

  const addNewProduct = () => {
    const name="Ime"
    const description="opis" 
    const picture="slika" 
    const price = 22
    const response = addProduct({name,description, picture, price})
  };

  let content;

  if(isLoading){
    content = <p>Loading...</p>
  }else if(isSuccess){
    
    console.log(products)
      const currentPosts = products.products.slice(firstPostIndex, lastPostIndex);
      content = 
      <div className="container text-center" style={{paddingTop: "4%", paddingBottom: "2%"}}>       
        <div className=" row" style={{paddingTop: "1rem"}}>
          <div className="col-2" style={{backgroundColor: "#0d6efd", height: 800}}>
            <button onClick={addNewProduct}> Add new</button>
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
      
    // content =
    // <div className="container text-center" style={{paddingTop: "4%", paddingBottom: "2%"}}>       
    //   <div className=" row" style={{paddingTop: "1rem"}}>
    //     <div className="col-2" style={{backgroundColor: "#0d6efd", height: 800}}>

    //     </div>
    //     <div className="col-9">
    //       <div className='row' style={{paddingBottom: "7%"}}>
    //         {
    //           products.products.map(product => {
    //                 <div className="col-lg-4">
    //                 <ProductCard></ProductCard>
    //                 </div>
    //           })
    //         }
    //       </div>
    //     </div>
    //   </div>
    // </div>
  }else if(isError){
    content = <p>{error}</p>
  }

  return (
    <div>
      {content}
    </div>
    
  )
}
export default Products;