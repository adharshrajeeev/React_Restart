import React, { useState } from 'react';
import products from '../../Api/products.json'
import AfterCart from '../CartButtons/AfterCart';

function Products() {
    const [count,setCount]=useState(0)

    const addToCart=()=>{
        setCount(count+1)
    }

  return (
   <section>
    <h1>Product list</h1>
    {
        products.map((product,key)=>(
          <div>
            <h3 key={product.id}>{product.title}</h3>
            {count}
            <AfterCart addToCart={addToCart}/>
          </div>  
    ))}
    

   </section>
  )
}

export default Products
