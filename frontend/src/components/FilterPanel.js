import React from 'react';
import SearchBar from './SearchBar';
import PriceSlider from './PriceSlider';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';
import { useNavigate } from "react-router-dom";

import '../assets/styles/FilterPanel.css';

const FilterPanel= ({selectedPrice,changePrice, value, changeInput}) =>{

  const token = useSelector(selectCurrentToken)  
  const role = JSON.parse(atob(token.split('.')[1])).role
  const navigate = useNavigate()

  const forwardToNewProductPage = () => {
    navigate('/new/product')
  }

  return (
    <div className='panel'>
       <div className='input-group'>
            <p className='label-range'>Price Range</p>
            <PriceSlider value={selectedPrice} changePrice={changePrice} />
        </div>
        <div className='input-group' style={{marginTop: "3rem"}}>
            <p className='label-range'>Search</p>
            <SearchBar value={value} changeInput={changeInput}/>
        </div>
        <div >
        {role == "creator" ? <button onClick={forwardToNewProductPage}> Add product </button> : <div></div>}
        </div>
    </div>
  );
}
export default FilterPanel;