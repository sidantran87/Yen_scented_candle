import React from 'react'
import BreadcrumComponent from '../../components/BreadcrumComponent/BreadcrumComponent'
import {gray} from '../../color'
import ProductDetailComponent from '../../components/ProductDetail/ProductDetailComponent'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
   const {id} = useParams()
   return (
      <div style={{padding: '42px 60px', height:'fit-content' }}>
         {/* <BreadcrumComponent/> */}
         <ProductDetailComponent productId={id}/>
      </div>
   )
}

export default ProductDetailPage