   import { Button, Checkbox, Table } from 'antd'
   import React, { useState } from 'react'
   import { DividerLine, OrderRowTitle, PaymentBody, PaymentContainer, PaymentDetail1, PaymentDetailContainer1, PaymentHeader, PaymentRow, TotalBody, TotalHeader } from '../AccountComponents/style';
   import { minusIcon, plusIcon, xIcon } from '../IconComponent/IconComponent';
   import { gray } from '../../color';
   import { BtnContainer, CartContainer, CartRow } from './style';
   import { useNavigate } from 'react-router-dom';
import { QuantityButton, QuantityInput, QuantityWrapper } from '../ProductDetail/style';
import * as ProductService from '../../services/ProductService';
import { useQuery } from '@tanstack/react-query';

   const items = [
   {
   title: 'Order received',
   },
   {
   title: 'Processing',
   },
   {
   title: 'On the way',
   },
   {
   title: 'Delivered',
   },
   ];

   const { Column } = Table;


   const data = [
   {
      name: 'Red Capsicum',
      age: 32,
      price: 14,
      quantity: 10,
      subtotal: 140
   },
   {
      name: 'Green Capsicum',
      age: 42,
      price: 14,
      quantity: 5,
      subtotal: 60
   },
   {
      name: 'Red Capsicum',
      age: 32,
      price: 14,
      quantity: 2,
      subtotal: 28
   },
   {
      name: 'Red Capsicum',
      age: 32,
      price: 14,
      quantity: 2,
      subtotal: 28
   },
   ];



   const OrderProductCard = (productId) => {

      const fetchDetailsProduct = async ({ queryKey }) => {
         try {
             const [, id] = queryKey;
             const res = await ProductService.getDetailsProduct(id);
             // console.log('data1: ', res);
             return res;
         } catch (error) {
             console.error('Error fetching product details:', error);
             throw error;
         }
     };

            // fetch ProductDetail data by productId
      const { data: productDetails } = useQuery({
         queryKey: ['product-detail', productId],
         queryFn: fetchDetailsProduct,
         enabled: !!productId,
         retry: 1,
         retryDelay: 1000
   });
   // console.log('data2:', productDetails)

   const newPrice = productDetails?.data?.price * (1 - productDetails?.data?.discount / 100)
   console.log('nPrice', newPrice)

   const [numProduct, setNumProduct] = useState(1);
   const maxCountInStock = productDetails?.data?.countInStock;
   const onChange = (value) => {
         const val = value;
         // Regular expression to check if the input is a non-negative integer
         const isPositiveInteger = /^[1-9]\d*$/.test(val);

         if (isPositiveInteger) {
            setNumProduct(val);
         } else if (value >= maxCountInStock) {
            setNumProduct(maxCountInStock);
         }
   };

   const onKeyDown = (event) => {
         // Unaccepted keys list
         const invalidKeys = ['e', 'E', '+', '-', '.', ','];

         if (invalidKeys.includes(event.key)) {
            event.preventDefault();
         }
   };

   const handleChangeCount = (type, limited) => {
         if(type === 'increase') {
            if(!limited) {
               setNumProduct(numProduct + 1)
            }
         }else {
            if(!limited) {
               setNumProduct(numProduct - 1)
            }
         }
   }
  

      const navigate = useNavigate();

      const handleOnClick = (page) => {
      navigate(`/${page}`);
      };

   return (
      <CartContainer>
         <CartRow>
            <Table pagination={false}  dataSource={data}>
               <Column title={'Product'} dataIndex="name" key="name" render={(text, record) => (
               <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <Checkbox></Checkbox>
                  <img style={{width: '70px', height:'70px', objectFit: 'contain'}} src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/327145663_912477443085208_5657223133568033444_n.png?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE2gbMASK_yco_UmybNHipyFyXNC0bAOw8XJc0LRsA7D2PzncJhC4-v4VjEcaZFafGDp2ZiSLJlQxTlv0iEAygh&_nc_ohc=j9PvM2hh1OEAX_D1Fcg&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCSs_jGhlCG8Z14IL-FReXE0QBT3h46IsuPZVL15pJ7Uw&oe=65A48C74" alt="" />
                  <div>{record.name}</div>
               </div>
                  )} />
               <Column title={'Price'} dataIndex="price" key="price" render={(text, record) => (
                  <div>${record.price}</div>
               )}/>
               <Column title={'Quantity'} dataIndex="quantity" key="quantity" render={(text, record) => (
                  <div>
                        <QuantityWrapper>
                        <QuantityButton onClick={() => handleChangeCount('decrease',numProduct === 1)}>
                            {minusIcon}
                        </QuantityButton>
                        <QuantityInput type='number' onChange={onChange} onKeyDown={onKeyDown} max={maxCountInStock} min={1} value={numProduct} controls={false} size="small" />
                        <QuantityButton onClick={() => handleChangeCount('increase',  numProduct === productDetails?.data?.countInStock)}>
                            {plusIcon}
                        </QuantityButton>
                    </QuantityWrapper>
                  </div>
               )}/>
               <Column title={'Subtotal'} dataIndex="subtotal" key="subtotal" render={(text, record) => (
                  <div>${record.subtotal}</div>
               )}/>
               <Column title={''} dataIndex="subtotal" key="subtotal" render={(text, record) => (
                  <div style={{width:'26px', color: gray[600], cursor: 'pointer'}}>{xIcon}</div>
               )}/>
            </Table>
            <BtnContainer>
               <Button size='large' style={{borderRadius: '40px'}} type='default'>Return to shop</Button>
               <Button size='large' style={{borderRadius: '40px'}} type='default'>Update Cart</Button>
            </BtnContainer>
         </CartRow>
         <div style={{flex: 1}}>
         <PaymentContainer>
               <div style={{display: 'flex', gap: '20px', padding: '18px 20px'}}>
                     <PaymentDetailContainer1>
                     <div style={{fontSize: 20, fontWeight: '500'}}>Cart Total:</div>
                     </PaymentDetailContainer1>
               </div>
               <DividerLine></DividerLine>
               <div style={{padding: '18px 20px'}}>
                     <PaymentRow>
                     <PaymentHeader>Subtotal:</PaymentHeader>  
                     <PaymentBody>$84.00</PaymentBody>
                     </PaymentRow>
                     <DividerLine></DividerLine>
                     <PaymentRow>
                     <PaymentHeader>Shipping:</PaymentHeader>
                     <PaymentBody>Free</PaymentBody>
                     </PaymentRow>
                     <DividerLine></DividerLine>
                     <PaymentRow>
                     <div style={{fontSize: '16px', fontWeight: '400', }}>Total:</div>
                     <TotalBody>$84.00</TotalBody>
                     </PaymentRow>
                     <PaymentRow style={{width: '100%'}}>
                        <Button onClick={() => handleOnClick('payment')} style={{borderRadius: '40px', textAlign: 'center', margin:'0 auto', width: '100%',color: 'white', fontSize: 16, fontWeight: '700'}} size='large' type='primary'>Check out</Button>
                     </PaymentRow>
               </div>
               </PaymentContainer>
         </div>
      </CartContainer>
   )
   }

   export default OrderProductCard