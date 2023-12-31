import React from 'react'
import BreadcrumComponent from '../../components/BreadcrumComponent/BreadcrumComponent'
import {gray} from '../../color'
import ProductDetailComponent from '../../components/ProductDetail/ProductDetailComponent'

const ProductDetailPage = () => {
   return (
      <div style={{padding: '42px 60px', background: gray.bg, height: '1000px' }}>
         <BreadcrumComponent/>
         <ProductDetailComponent/>
      </div>
   )
}

export default ProductDetailPage