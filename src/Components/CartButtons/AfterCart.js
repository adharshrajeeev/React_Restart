import React from 'react'

const AfterCart = ({addToCart}) => {
  return (
    <div>
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default AfterCart