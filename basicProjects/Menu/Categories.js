import React from 'react';

const Categories = ({categories, filterItems}) => {// destructuring the filter items function 
  // remember to return jsx elements when using functions
  return(
    <React.Fragment>
      <div className='btn-container'>
        {categories.map((category, index)=>{
          return(
            <>  
              <button className='filter-btn' key={index} onClick={()=>filterItems(category)}>{category}</button>
            </>
          );
        })}
      </div>
    </React.Fragment>
    );
};

export default Categories;