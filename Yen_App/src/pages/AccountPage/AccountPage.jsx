import React, { useState } from 'react';
import { Table, Tag } from 'antd';
import { gray } from '../../color';
import DashboardComponent from '../../components/AccountComponents/DashboardComponent';
import OrderComponent from '../../components/AccountComponents/OrderComponent';
import { useNavigate } from 'react-router-dom';
import { Container, ContentContainer, Header, NavigationItem, Sidebar } from './style';
import OrderDetailComponent from '../../components/AccountComponents/OrderDetailComponent';

const { Column } = Table;


const AccountPage = () => {

const navigate = useNavigate();

const handleOnClick = () => {
   navigate(`/`);
   setCurrentPage();
};

const [selectedNavItem, setSelectedNavItem] = useState('dashboard');
const [currentPage, setCurrentPage] = useState('');

const renderContent = () => {
   switch (selectedNavItem) {
      case 'dashboard':
         return <DashboardComponent/>;
      case 'orderHistory':
         return <OrderComponent/>
      default:
         return <DashboardComponent/>;
   }
};

return (
   <>
   <Container>
      <Sidebar>
         <Header>Navigation</Header>
         <div>
            <NavigationItem onClick={() => setSelectedNavItem('dashboard')}>Dashboard</NavigationItem>
            <NavigationItem onClick={() => setSelectedNavItem('orderHistory')}>Order History</NavigationItem>
            <NavigationItem onClick={() => handleOnClick()}>Log-out</NavigationItem>
         </div>
      </Sidebar>

   <ContentContainer>
      {renderContent()}
      <OrderDetailComponent/>
   </ContentContainer>
   </Container>
      
   </>

);
};

export default AccountPage;
