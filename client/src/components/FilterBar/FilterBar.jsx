import React from 'react'
import "./FilterBar.css"
import { categories } from '../../utils/categories'

const FilterBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className='filter-bar'>

      {
        categories.map((category)=>{
          return(
            <button 
            key={category}

            className={selectedCategory===category ? 
              "filter-btn active"
              : "filter-btn"
            }
            onClick={selectedCategory(category)}
            >

              {category}

            </button>
          );
        })
      }
      
    </div>
  )
}

export default FilterBar