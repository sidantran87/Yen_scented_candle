import React from 'react'
import { Table, Tag } from 'antd';
import { gray } from '../../color';
import { OrderHistoryHeader, OrderHistoryTitle, RecentOrderHistoryContainer, ViewAllLink } from './style';

const { Column } = Table;


const data = [
   {
      orderID: 3933,
      date: '4 April, 2021',
      total: '135',
      quantity: 5,
      status: 'Processing',
   },
   {
      orderID: 3933,
      date: '4 April, 2021',
      total: '25',
      quantity: 2,
      status: 'On the way',
   },
   {
      orderID: 3933,
      date: '4 April, 2021',
      total: '250',
      quantity: 4,
      status: 'Completed',
   },
];


const OrderComponent = () => {
   return (
      <div>
      <RecentOrderHistoryContainer>
         <OrderHistoryHeader>
            <OrderHistoryTitle>Recent Order History</OrderHistoryTitle>
            <ViewAllLink>View All</ViewAllLink>
         </OrderHistoryHeader>
            <Table style={{padding: '0 24px'}}  dataSource={data}>
               <Column title={'OrderID'} dataIndex="orderID" key="orderID" render = {(text, record) => 
                  <div>#{record.orderID}</div>
               } />
               <Column title={'Date'} dataIndex="date" key="date" />
               <Column title={'Total'} dataIndex="total" key="total" render ={(text, record) => 
                  <div>${record.total} ({record.quantity} Products)</div>
               } />
               <Column title={'Status'} dataIndex="status" key="status"/>
               <Column title={''} dataIndex="tags" key="tags" render={() => <div style={{ cursor: 'pointer', color: '#B2006B', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500'}} >View Details</div>} />
            </Table>
      </RecentOrderHistoryContainer>
      </div>
   )
}
export default OrderComponent


