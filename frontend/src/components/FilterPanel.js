import React from 'react';
import SearchBar from './SearchBar';
import PriceSlider from './PriceSlider';
import '../assets/styles/FilterPanel.css'
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../context/authSlice';
import { useNavigate } from "react-router-dom";

const FilterPanel= ({selectedPrice,changePrice, value, changeInput}) =>{

  const token = useSelector(selectCurrentToken)  
  const role = JSON.parse(atob(token.split('.')[1])).role
  const navigate = useNavigate()
  const forwardToNewProduct = () => {
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
        <div>
        {role == "creator" ? <button onClick={forwardToNewProduct}> Add product </button> : <div></div>}

        </div>
    </div>
  );
}
export default FilterPanel;