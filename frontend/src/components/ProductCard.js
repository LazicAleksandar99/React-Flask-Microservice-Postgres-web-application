import React from "react";
import { useDeleteProductMutation } from '../context/product/productApiSlice';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';

import "../assets/styles/ProductCard.css";

const ProductCard = ({ name, description, picture, price, id }) => {
    
    const token = useSelector(selectCurrentToken) 
    const role = JSON.parse(atob(token.split('.')[1])).role
    const [deleteProduct] = useDeleteProductMutation()

    const deleteProductById = async() => {
        try{
            const response = await deleteProduct(id)
        }catch(error){
            console.log(error)
        }
      }


    return (
        <div>
            <div className='card'>
                <div className='card_image'>
                    <img src={picture} alt={name} />
                </div>
                <div className='card_info'>
                    <h2>{name}</h2>
                    <h3>${price}</h3>
                </div>
            </div>
            {role == "creator" ? <button type="button" onClick={deleteProductById} className="btn btn-danger">Delete</button> : <div></div>}
        </div>
    );
};

export default ProductCard;

// import React, { Link } from 'react';


// const ProductCard= () =>{

//   return (
//     <div>
//         <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" style={{marginBottom: "4%"}}><title>Placeholder</title><rect width="100%" height="100%" fill="#0d6efd"/></svg>
//         <h2 className="fw-normal">Heading</h2>
//         <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
//         <p><a className="btn btn-primary" href="#">View details &raquo;</a></p>
//     </div>
//   );
// }
// export default ProductCard;
