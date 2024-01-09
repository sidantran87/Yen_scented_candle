import React from 'react'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { Col, Pagination, Row } from 'antd'
import { CardContainer } from '../Homepage/style'
import ProductCard from '../../components/ProductCard/ProductCard'
import { WrapperNavbar } from './style'
import * as ProductService from '../../services/ProductService'
import { useQuery } from '@tanstack/react-query'
function TypeProductPage(props) {
   const { countInStock, description, image, name, price, rating, type, selled, discount, id } = props
   // Loading...: Cần map data vào những content bên dưới ProductInfo
   const fetchProductAll = async () => {
      const res = await ProductService.getAllProduct();
      console.log('res', res);
      return res;
   }
   const { isLoading, data: products } = useQuery({queryKey: 'products', queryFn: fetchProductAll, retry: 3, retryDelay: 1000})
   console.log('data', products)
   const newPrice = price * (1 - discount/100);
   return (
      <div  id='container' style={{background: '#efefef', padding: '0 60px', height:'3000px',display:'flex', flexDirection: 'column', alignItems:'center'}}>
         <Row style={{flexWrap:'nowrap', paddingTop: '34px'}}>
            <WrapperNavbar span={4}>
               <NavbarComponent/>
            </WrapperNavbar>
            <Col span={20}>
               <CardContainer>
               {products?.data?.map((product) => {
                     return (
                        <ProductCard style={{}} key={product._id}
                           countInStock={product.countInStock}
                           description={product.description}
                           image={product.image}
                           name={product.name}
                           price={product.price}
                           rating={product.rating}
                           type={product.type}
                           selled={product.selled}
                           discount={product.discount}
                           id={product._id} />
                     )
                  })}
               </CardContainer>
               <Pagination defaultCurrent={1} total={50} style={{textAlign: 'center'}}/>
            </Col>
         </Row>
         
      </div>
   )
}

export default TypeProductPage