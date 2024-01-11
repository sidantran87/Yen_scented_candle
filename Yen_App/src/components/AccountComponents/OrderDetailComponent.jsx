import { Steps, Table, Tag } from 'antd'
import React from 'react'
import { gray, success } from '../../color';
import { DividerLine, EmailRowContainer, OrderAdd, OrderDetailBox, OrderDetailsContainer, OrderDetailsDate, OrderDetailsHeader, OrderDetailsTitle, OrderHeader, OrderName, OrderRowContainer, OrderRowDetail, OrderRowTitle, PaymentBody, PaymentContainer, PaymentDetail1, PaymentDetailContainer1, PaymentHeader, PaymentRow, PhoneRowContainer, PinkText, TotalBody, TotalHeader } from './style';

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
];

const OrderDetailComponent = () => {
return (
   <OrderDetailBox>
         <div>
            <OrderDetailsHeader>
            <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
               <OrderDetailsTitle>Order Details</OrderDetailsTitle>
               <OrderDetailsDate>•</OrderDetailsDate>
               <OrderDetailsDate>April 24, 2021</OrderDetailsDate>
               <OrderDetailsDate>•</OrderDetailsDate>
               <OrderDetailsDate>3 Products</OrderDetailsDate>
            </div>
            <PinkText>Back to List</PinkText>
            </OrderDetailsHeader>
         </div>
      <DividerLine></DividerLine>
      <div>
         <div style={{display: 'flex', padding: '24px 24px', gap: '24px' }}>
            <div style={{flex: 3}}>
               <div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  </div>
                  <OrderDetailsContainer>
                        <div style={{height: 'fit-content'}}>
                           <OrderHeader>Billing Address</OrderHeader>
                           <DividerLine></DividerLine>
                           <OrderName>Dainne Russell</OrderName>
                           <OrderAdd>4140 Parker Rd. Allentown, New Mexico 31134</OrderAdd>
                           <EmailRowContainer>
                              <OrderRowTitle>Email</OrderRowTitle>
                              <OrderRowDetail>dainne.ressell@gmail.com</OrderRowDetail>
                           </EmailRowContainer>
                           <PhoneRowContainer>
                                 <OrderRowTitle>Phone</OrderRowTitle>
                                 <OrderRowDetail>(671) 555-0110</OrderRowDetail>
                           </PhoneRowContainer>
                        </div>
                        {/* <div style={{width: '1px', height: '220px', border: '1px #E6E6E6 solid'}}></div> */}
                        <div style={{width: '2px',height: '220px',backgroundColor: gray[100]}}></div>
                        <div style={{height: 'fit-content'}}>
                           <OrderHeader>Shipping Address</OrderHeader>
                           <DividerLine></DividerLine>
                           <OrderName>Dainne Russell</OrderName>
                           <OrderAdd>4140 Parker Rd. Allentown, New Mexico 31134</OrderAdd>
                           <EmailRowContainer>
                              <OrderRowTitle>Email</OrderRowTitle>
                              <OrderRowDetail>dainne.ressell@gmail.com</OrderRowDetail>
                           </EmailRowContainer>
                           <PhoneRowContainer>
                                 <OrderRowTitle>Phone</OrderRowTitle>
                                 <OrderRowDetail>(671) 555-0110</OrderRowDetail>
                           </PhoneRowContainer>
                        </div>
                  </OrderDetailsContainer>
               </div>
            </div>

            <PaymentContainer>
               <div style={{display: 'flex', gap: '20px', padding: '18px 20px'}}>
                  <PaymentDetailContainer1>
                     <OrderRowTitle>Order ID:</OrderRowTitle>
                     <PaymentDetail1>#4152</PaymentDetail1>
                  </PaymentDetailContainer1>
                  <div style={{width: '1px', height: '30px', border: '1px #E6E6E6 solid'}}></div>
                  <PaymentDetailContainer1>
                     <OrderRowTitle>Payment Method:</OrderRowTitle>
                     <PaymentDetail1>Paypal</PaymentDetail1>
                  </PaymentDetailContainer1>
               </div>
               <DividerLine></DividerLine>
               <div style={{padding: '18px 20px'}}>
                  <PaymentRow>
                     <PaymentHeader>Subtotal:</PaymentHeader>
                     <PaymentBody>$365.00</PaymentBody>
                  </PaymentRow>
                  <DividerLine></DividerLine>
                  <PaymentRow>
                     <PaymentHeader>Discount:</PaymentHeader>
                     <PaymentBody>20%</PaymentBody>
                  </PaymentRow>
                  <DividerLine></DividerLine>
                  <PaymentRow>
                     <PaymentHeader>Shipping:</PaymentHeader>
                     <PaymentBody>Free</PaymentBody>
                  </PaymentRow>
                  <DividerLine></DividerLine>
                  <PaymentRow>
                     <TotalHeader>Total</TotalHeader>
                     <TotalBody>$84.00</TotalBody>
                  </PaymentRow>
               </div>
            </PaymentContainer>
         </div>

         <div>
            <Steps style={{padding: '40px 0'}} size='small' current={3} labelPlacement="vertical" items={items} />
         </div>

         <div>
         <Table  dataSource={data}>
            <Column title={'Product'} dataIndex="name" key="name" render={(text, record) => (
            <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
               <img style={{width: '70px', height:'70px', objectFit: 'contain'}} src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/327145663_912477443085208_5657223133568033444_n.png?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE2gbMASK_yco_UmybNHipyFyXNC0bAOw8XJc0LRsA7D2PzncJhC4-v4VjEcaZFafGDp2ZiSLJlQxTlv0iEAygh&_nc_ohc=j9PvM2hh1OEAX_D1Fcg&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCSs_jGhlCG8Z14IL-FReXE0QBT3h46IsuPZVL15pJ7Uw&oe=65A48C74" alt="" />
               <div>{record.name}</div>
            </div>
               )} />
            <Column title={'Price'} dataIndex="price" key="price" render={(text, record) => (
               <div>${record.price}</div>
            )}/>
            <Column title={'Quantity'} dataIndex="quantity" key="quantity" render={(text, record) => (
               <div>{record.quantity}</div>
            )}/>
            <Column title={'Subtotal'} dataIndex="subtotal" key="subtotal" render={(text, record) => (
               <div>${record.subtotal}</div>
            )}/>
         </Table>
         </div>

      </div>
   </OrderDetailBox>
)
}

export default OrderDetailComponent