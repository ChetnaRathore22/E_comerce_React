import'./category.css'
import{useSelector} from 'react-redux'
function Category(){
    const{categoryList,isLoading,error} = useSelector((state)=>state.category);
    return<><div className='mt-5'>
     <h1>Categories</h1>
     <hr className='categoryline'/>
     <div className='categoryStyle mt-2'>
     
       <div className='row'>
        {categoryList.map((category,index)=>
          <div key={index} className='col-3 mt-3 mb-3'>
          <h2>{category.categoryName}</h2>
      </div>
        )}
        
       </div>
     </div>
     </div>
    </>
}

export default Category;