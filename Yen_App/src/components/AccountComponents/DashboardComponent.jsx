import React from 'react'
import { Avatar, Table, Tag } from 'antd';
import { gray } from '../../color';
import { AddressContainer, AddressDetails, BillingTitle, EditAddressLink, EditProfileLink, FlexContainer, OrderHistoryHeader, OrderHistoryTitle, ProfileContainer, ProfileDetails, RecentOrderHistoryContainer, ViewAllLink } from './style';

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


const DashboardComponent = () => {
   return (
      <div>
           <FlexContainer>
    <ProfileContainer>
      <img style={{width: '96px', height: '100%', objectFit: 'contain', borderRadius: '100%'}} src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/327145663_912477443085208_5657223133568033444_n.png?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE2gbMASK_yco_UmybNHipyFyXNC0bAOw8XJc0LRsA7D2PzncJhC4-v4VjEcaZFafGDp2ZiSLJlQxTlv0iEAygh&_nc_ohc=j9PvM2hh1OEAX9ShFBy&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfD_YtIVeRKtHpYG1Rj_E4ZOhVsV8YrGbqVDFPkKEc79Og&oe=65A29234" alt=""/>
      <ProfileDetails>
        <div>Nguyen Thien Huy</div>
        <div>Customer</div>
      </ProfileDetails>
      <EditProfileLink>Edit Profile</EditProfileLink>
    </ProfileContainer>

    <AddressContainer>
      <BillingTitle>Billing Address</BillingTitle>
      <AddressDetails>
        <div>Nguyen Thien Huy</div>
        <div>4140 Parker Rd. Allentown, New Mexico 31134</div>
        <div>dainne.ressell@gmail.com</div>
        <div>(671) 555-0110</div>
      </AddressDetails>
      <EditAddressLink>Edit Address</EditAddressLink>
    </AddressContainer>
  </FlexContainer>

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
         <Column title={''} dataIndex="tags" key="tags" render={() => <div style={{color: '#B2006B', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500'}}>View Details</div>} />
      </Table>
  </RecentOrderHistoryContainer>
      </div>
   )
}
export default DashboardComponent


