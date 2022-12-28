import React from 'react';
import SearchBar from './SearchBar';
import PriceSlider from './PriceSlider';
import '../assets/styles/FilterPanel.css'

const FilterPanel= ({
    selectedPrice,
    changePrice,
  }) =>{

  return (
    <div className='panel'>
       <div className='input-group'>
            <p className='label-range'>Price Range</p>
            <PriceSlider value={selectedPrice} changePrice={changePrice} />
        </div>
        <div className='input-group' style={{marginTop: "3rem"}}>
            <p className='label-range'>Search</p>
            <SearchBar/>
        </div>
    </div>
  );
}
export default FilterPanel;