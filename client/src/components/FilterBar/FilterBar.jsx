import "./FilterBar.css"
import { categories } from '../../utils/categories'

const FilterBar = ({

  selectedCategory, 
  setSelectedCategory
  }) => {
  

  return (
    <div className='filter-bar'>

      {
        categories.map((category)=>{
          return( <button 
            key={category}

            className={
              selectedCategory===category ? 
              "filter-btn active"
              : "filter-btn"
            }
            onClick={()=>setSelectedCategory(category)}
            >

              {category}

            </button>)
           
          
        })
      }
      
    </div>
  )
}

export default FilterBar
