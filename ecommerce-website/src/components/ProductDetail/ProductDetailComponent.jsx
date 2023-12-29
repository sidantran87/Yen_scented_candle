import { Col,Image, Row } from 'antd'
import React from 'react'
import ProductImg from '../../assets/img/product1.jpg'
import { success, white } from '../../color'
import { DescriptionWrapper, DiscountTag, NewPrice, OldPrice, PriceDetail, PriceWrapper, ProductDetailWrapper, ProductName, ProductStatus } from './style'
const ProductDetailComponent = () => {
   return (
      <Row>
         <Col span={10} style={{paddingRight:'24px'}}>
            <Image preview={false} src={ProductImg}/>
            <Row style={{display:'flex', justifyContent:'space-between', paddingTop:'12px'}}> 
               <Col span={4}><Image preview={false} src={ProductImg}/></Col>
               <Col span={4}><Image preview={false} src={ProductImg}/></Col>
               <Col span={4}><Image preview={false} src={ProductImg}/></Col>
               <Col span={4}><Image preview={false} src={ProductImg}/></Col>
               <Col span={4}><Image preview={false} src={ProductImg}/></Col>
         </Row>
         </Col>
         <Col span={14}>
            <div>
               <ProductDetailWrapper>
                  <ProductName>Chinese Cabbage</ProductName>
                  <ProductStatus>In Stock</ProductStatus>
               </ProductDetailWrapper>
               <div>
                  <PriceWrapper>
                     <PriceDetail>
                        <OldPrice>$48.00</OldPrice>
                        <NewPrice>$17.28</NewPrice>
                     </PriceDetail>
                        <DiscountTag>64% off</DiscountTag>
                  </PriceWrapper>
               </div>
            </div>
            <DescriptionWrapper>
               <strong>Description</strong>
               <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
               </p>
            </DescriptionWrapper>
         </Col>
      </Row>
   )
}

export default ProductDetailComponent