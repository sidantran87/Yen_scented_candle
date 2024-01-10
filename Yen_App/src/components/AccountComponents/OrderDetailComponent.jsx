import { Steps, Table, Tag } from 'antd'
import React from 'react'
import { success } from '../../color';

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
   <div>
         <div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '16px 24px'}}>
            <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
               <div style={{color: '#1A1A1A', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500'}}>Order Details</div>
               <div style={{color: '#4D4D4D', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>•</div>
               <div style={{color: '#4D4D4D', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>April 24, 2021</div>
               <div style={{color: '#4D4D4D', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>•</div>
               <div style={{color: '#4D4D4D', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>3 Products</div>
            </div>
            <div style={{color: '#B2006B', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500'}}>Back to List</div>
            </div>
         </div>
      <hr />
      <div>
         <div style={{display: 'flex', padding: '24px 24px', gap: '24px' }}>
            <div style={{flex: 3}}>
               <div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                     
                     
                  </div>
                  <div style={{display: 'flex', height: 'fit-content', border: '1px solid black', borderRadius: '8px', padding: '20px', gap: '20px'}}>
                        <div style={{height: 'fit-content'}}>
                           <div style={{color: '#999999', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase', padding: '0 0 18px'}}>Billing Address</div>
                           <hr />
                           <div style={{color: '#1A1A1A', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', padding: '14px 0 8px'}}>Dainne Russell</div>
                           <div style={{color: '#666666', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>4140 Parker Rd. Allentown, New Mexico 31134</div>
                           <div style={{height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex', padding: '36px 0 12px'}}>
                              <div style={{color: '#999999', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase'}}>Email</div>
                              <div style={{width: 282, color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>dainne.ressell@gmail.com</div>
                           </div>
                           <div style={{height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                 <div style={{color: '#999999', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase'}}>Phone</div>
                                 <div style={{width: 282, color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>(671) 555-0110</div>
                           </div>
                        </div>
                        <div style={{width: '1px', height: '180px', border: '1px #E6E6E6 solid'}}></div>
                        <div style={{height: 'fit-content'}}>
                           <div style={{color: '#999999', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase', padding: '0 0 18px'}}>Shipping Address</div>
                           <hr />
                           <div style={{color: '#1A1A1A', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', padding: '14px 0 8px'}}>Dainne Russell</div>
                           <div style={{color: '#666666', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>4140 Parker Rd. Allentown, New Mexico 31134</div>
                           <div style={{height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex', padding: '36px 0 12px'}}>
                              <div style={{color: '#999999', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase'}}>Email</div>
                              <div style={{width: 282, color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>dainne.ressell@gmail.com</div>
                           </div>
                           <div style={{height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                                 <div style={{color: '#999999', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase'}}>Phone</div>
                                 <div style={{width: 282, color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>(671) 555-0110</div>
                           </div>
                        </div>
                  </div>
               </div>
            </div>

            <div style={{border: '1px solid black', borderRadius: '8px', flex: 1}}>
               <div style={{display: 'flex', gap: '20px', padding: '18px 20px'}}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                     <div style={{color: '#999999', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase'}}>Order ID:</div>
                     <div style={{color: '#1A1A1A', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400'}}>#4152</div>
                  </div>
                  <div style={{width: '1px', height: '30px', border: '1px #E6E6E6 solid'}}></div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                     <div style={{color: '#999999', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase'}}>Payment Method:</div>
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
            </div>
         </div>

         <div>
            <Steps style={{padding: '40px 0'}} size='small' current={2} labelPlacement="vertical" items={items} />
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