import React from 'react'
import { Table, Tag } from 'antd';
import { gray } from '../../color';
import { OrderHistoryHeader, OrderHistoryTitle, RecentOrderHistoryContainer, ViewAllLink } from './style';

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


const OrderComponent = () => {
   return (
      <div>
      <RecentOrderHistoryContainer>
         <OrderHistoryHeader>
            <OrderHistoryTitle>Recent Order History</OrderHistoryTitle>
            <ViewAllLink>View All</ViewAllLink>
         </OrderHistoryHeader>
            <Table  dataSource={data}>
               <Column title={'OrderID'} dataIndex="key" key="key" />
               <Column title={'Date'} dataIndex="age" key="age" />
               <Column title={'Total'} dataIndex="address" key="address" />
               <Column title={'Status'} dataIndex="tags" key="tags" render={(tags) => <Tag>{tags[0]}</Tag>} />
               <Column title={''} dataIndex="tags" key="tags" render={() => <div style={{color: '#B2006B', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500'}} >View Details</div>} />
            </Table>
      </RecentOrderHistoryContainer>
      </div>
   )
}
export default OrderComponent


