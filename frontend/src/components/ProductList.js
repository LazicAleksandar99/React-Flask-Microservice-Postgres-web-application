import React from "react";

import ProductCard from "./ProductCard";
import "../assets/styles/ProductList.css";

const ProductList = ({ productsData }) => {
    return (
        <div className='product_list'>
            {productsData.map((product, index) => {
                return (
                    <ProductCard
                        key={index}
                        name={product.name}
                        picture={product.picture}
                        description={product.description}
                        price={product.current_price}
                        id = {product.product_id}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;