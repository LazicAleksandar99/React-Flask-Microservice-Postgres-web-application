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
                        image={product.image}
                        description={product.description}
                        price={product.current_price}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;