import React from "react";
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';

import "../assets/styles/ProductCard.css";

const ProductCard = ({ name, description, picture, price, id, deletedProduct }) => {
    
    const token = useSelector(selectCurrentToken) 
    const role = JSON.parse(atob(token.split('.')[1])).role

    return (
        <div>
            <div className='card'>
                <div className='card_image'>
                    <img src={picture} alt={name} />
                </div>
                <div className='card_info'>
                    <h2>{name}</h2>
                    <h5>{description}</h5>
                    <h3>{price} $</h3>
                </div>
            </div>
            {role == "creator" ? <button type="button" onClick={event => deletedProduct(event, id )} className="btn btn-danger">Delete</button> : <div></div>}
        </div>
    );
};

export default ProductCard;
