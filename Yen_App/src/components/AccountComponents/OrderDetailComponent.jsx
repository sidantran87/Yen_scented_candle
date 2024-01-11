import { Steps, Table, Tag } from 'antd'
import React from 'react'
import { success } from '../../color';
import { EmailRowContainer, OrderAdd, OrderDetailsContainer, OrderDetailsDate, OrderDetailsHeader, OrderDetailsTitle, OrderHeader, OrderName, OrderRowContainer, OrderRowDetail, OrderRowTitle, PaymentBody, PaymentContainer, PaymentDetail1, PaymentDetailContainer1, PaymentHeader, PaymentRow, PhoneRowContainer, PinkText, TotalBody, TotalHeader } from './style';

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
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
   },
   {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
   },
   {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
   },
];

const OrderDetailComponent = () => {
return (
   <div style={{height: 'fit-content', border: '1px solid black', borderRadius: '8px', padding: '20px', gap: '20px'}}>
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
      <hr />
      <div>
         <div style={{display: 'flex', padding: '24px 24px', gap: '24px' }}>
            <div style={{flex: 3}}>
               <div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  </div>
                  <OrderDetailsContainer>
                        <div style={{height: 'fit-content'}}>
                           <OrderHeader>Billing Address</OrderHeader>
                           <hr />
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
                        <div style={{width: '1px', height: '220px', border: '1px #E6E6E6 solid'}}></div>
                        <div style={{height: 'fit-content'}}>
                           <OrderHeader>Shipping Address</OrderHeader>
                           <hr />
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
               <hr />
               <div style={{padding: '18px 20px'}}>
                  <PaymentRow>
                     <PaymentHeader>Subtotal:</PaymentHeader>
                     <PaymentBody>$365.00</PaymentBody>
                  </PaymentRow>
                  <hr />
                  <PaymentRow>
                     <PaymentHeader>Discount:</PaymentHeader>
                     <PaymentBody>20%</PaymentBody>
                  </PaymentRow>
                  <hr />
                  <PaymentRow>
                     <PaymentHeader>Shipping:</PaymentHeader>
                     <PaymentBody>Free</PaymentBody>
                  </PaymentRow>
                  <hr />
                  <PaymentRow>
                     <TotalHeader>Total</TotalHeader>
                     <TotalBody>$84.00</TotalBody>
                  </PaymentRow>
               </div>
            </PaymentContainer>
         </div>

         <div>
            <Steps style={{padding: '40px 0'}} size='small' current={0} labelPlacement="vertical" items={items} />
         </div>

         <div>
         <Table  dataSource={data}>
            <Column title={'Product'} dataIndex="key" key="key" />
            <Column title={'Price'} dataIndex="age" key="age" />
            <Column title={'Quantity'} dataIndex="address" key="address" />
            <Column title={'Subtotal'} dataIndex="address" key="address" />
         </Table>
         </div>

      </div>
   </div>
)
}

export default OrderDetailComponent