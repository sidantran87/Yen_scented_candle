import { Steps, Table, Tag } from 'antd'
import React from 'react'
import { success } from '../../color';
import { OrderAdd, OrderDetailsContainer, OrderDetailsDate, OrderDetailsHeader, OrderDetailsTitle, OrderHeader, OrderName, OrderRowContainer, OrderRowDetail, OrderRowTitle, PaymentContainer, PhoneRowContainer, PinkText } from './style';

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
                           <OrderRowContainer>
                              <OrderRowTitle>Email</OrderRowTitle>
                              <OrderRowDetail>dainne.ressell@gmail.com</OrderRowDetail>
                           </OrderRowContainer>
                           <PhoneRowContainer>
                                 <OrderRowTitle>Phone</OrderRowTitle>
                                 <OrderRowDetail>(671) 555-0110</OrderRowDetail>
                           </PhoneRowContainer>
                        </div>
                        <div style={{width: '1px', height: '180px', border: '1px #E6E6E6 solid'}}></div>
                        <div style={{height: 'fit-content'}}>
                           <OrderHeader>Shipping Address</OrderHeader>
                           <hr />
                           <OrderName>Dainne Russell</OrderName>
                           <OrderAdd>4140 Parker Rd. Allentown, New Mexico 31134</OrderAdd>
                           <OrderRowContainer>
                              <OrderRowTitle>Email</OrderRowTitle>
                              <OrderRowDetail>dainne.ressell@gmail.com</OrderRowDetail>
                           </OrderRowContainer>
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
                  <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                     <OrderRowTitle>Order ID:</OrderRowTitle>
                     <div style={{color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>#4152</div>
                  </div>
                  <div style={{width: '1px', height: '30px', border: '1px #E6E6E6 solid'}}></div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                     <OrderRowTitle>Payment Method:</OrderRowTitle>
                     <div style={{color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>Paypal</div>
                  </div>
               </div>
               <hr />
               <div style={{padding: '18px 20px'}}>
                  <div style={{display:'flex', justifyContent: 'space-between', padding: '12px 0'}}>
                     <div style={{color: '#666666', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>Subtotal:</div>
                     <div style={{color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500'}}>$365.00</div>
                  </div>
                  <hr />
                  <div style={{display:'flex', justifyContent: 'space-between', padding: '12px 0'}}>
                     <div style={{color: '#666666', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>Discount:</div>
                     <div style={{color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500'}}>20%</div>
                  </div>
                  <hr />
                  <div style={{display:'flex', justifyContent: 'space-between', padding: '12px 0'}}>
                     <div style={{color: '#666666', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>Shipping:</div>
                     <div style={{color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500'}}>Free</div>
                  </div>
                  <hr />
                  <div style={{display:'flex', justifyContent: 'space-between', padding: '12px 0'}}>
                     <div style={{color: '#1A1A1A', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400'}}>Total</div>
                     <div style={{color: '#742C57', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600'}}>$84.00</div>
                  </div>
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