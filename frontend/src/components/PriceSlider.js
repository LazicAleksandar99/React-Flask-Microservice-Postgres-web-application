import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const PriceSlider = ({ value, changePrice }) => {
  
   function valuetext(value) {
    return `${value}°C`;
   }

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={changePrice}  
        valueLabelDisplay="auto"
        min={1}
        max={10000}
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
};

export default PriceSlider;