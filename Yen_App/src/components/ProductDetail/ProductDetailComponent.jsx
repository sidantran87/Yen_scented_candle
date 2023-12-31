import { Button, Col,Image, Rate, Row } from 'antd'
import React from 'react'
import ProductImg from '../../assets/img/product1.jpg'
import { BuyNowBtn, CTABtn, CTAWrapper, CartBtn, DescContent, DescTitle, DescriptionWrapper, DiscountTag, NewPrice, OldPrice, PriceDetail, PriceWrapper, ProductDetailWrapper, ProductName, ProductStatus, QuanityButton, QuanityInput, QuantityWrapper } from './style'
import { success, warning, gray } from '../../color'
import {minusIcon, plusIcon} from '../../components/IconComponent/IconComponent'

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
         <Col span={14} style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
            <div>
               <ProductDetailWrapper>
                  <ProductName>Chinese Cabbage</ProductName>
                  <ProductStatus>In Stock</ProductStatus>
               </ProductDetailWrapper>
               <div style={{paddingTop: '12px', fontFamily: 'Poppins', fontSize: '16px', color:gray[500]}}><Rate allowHalf defaultValue={5} value={5} style={{color: warning, paddingRight: '10px'}} />4 Reviews</div>
               <div style={{padding: '20px 0'}} >
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
               <DescTitle>Description:</DescTitle>
               <DescContent>
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
               </DescContent>
            </DescriptionWrapper>
            <CTAWrapper>

               <QuantityWrapper>
                  <QuanityButton>
                     {minusIcon}
                  </QuanityButton>
                  <QuanityInput placeholder='5' bordered={false}/>
                  <QuanityButton>
                     {plusIcon}
                  </QuanityButton>
               </QuantityWrapper>

               <CTABtn>
                  <CartBtn>
                     <Button size='large' style={{background: success.default, fontFamily: 'Poppins', width: '100%', height:'100%', borderRadius: '100px'}} type='primary'>Buy now</Button>
                  </CartBtn>
                  <BuyNowBtn>
                     <Button size='large' style={{fontFamily: 'Poppins', width: '100%', height:'100%', borderRadius: '100px'}} type='default'>Add to cart</Button>
                  </BuyNowBtn>
               </CTABtn>

            </CTAWrapper>
         </Col>
      </Row>
   )
}

export default ProductDetailComponent