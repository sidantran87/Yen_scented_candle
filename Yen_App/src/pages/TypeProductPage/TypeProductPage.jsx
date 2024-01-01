import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { Col, Pagination, Row } from 'antd'
import { CardContainer } from '../Homepage/style'
import ProductCard from '../../components/ProductCard/ProductCard'
import { WrapperNavbar } from './style'
function TypeProductPage(props) {
   const { countInStock, description, image, name, price, rating, type, selled, discount, id } = props
   // Loading...: Cần map data vào những content bên dưới ProductInfo
   const newPrice = price * (1 - discount/100);
   return (
      <div  id='container' style={{background: '#efefef', padding: '0 60px', height:'3000px',display:'flex', flexDirection: 'column', alignItems:'center'}}>
         <Row style={{flexWrap:'nowrap', paddingTop: '34px'}}>
            <WrapperNavbar span={4}>
               <NavbarComponent/>
            </WrapperNavbar>
            <Col span={20}>
               <CardContainer>
                  <ProductCard/> 
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
                  <ProductCard/>
               </CardContainer>
               <Pagination defaultCurrent={1} total={50} style={{textAlign: 'center'}}/>
            </Col>
         </Row>
         
      </div>
   )
}

export default TypeProductPage