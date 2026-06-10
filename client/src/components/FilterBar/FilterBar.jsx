import React from 'react'
import "./FilterBar.css"
import { categories } from '../../utils/categories'

const FilterBar = () => {
  return (
    <div className='filter-bar'>

      {
        categories.map((categories, index)=>{
          return(
            <button 
            key={index}
            className='filter-btn'>
              {categories}
            </button>
          );
        })
      }
      
    </div>
  )
}

export default FilterBar