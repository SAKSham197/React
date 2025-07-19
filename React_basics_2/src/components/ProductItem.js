import React from 'react'
import ProductDate from './ProductDate'
import Card  from './Card'
import './ProductItem.css'

const ProductItem = (props) => {
  return (
   <Card>
    <ProductDate date={props.date}></ProductDate>
    <div>
        <h2>{props.title}</h2>
    </div>
   </Card>
  )
}

export default ProductItem