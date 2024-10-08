   import React, { useEffect, useState } from 'react';
   import { Table, Tag, message } from 'antd';
   import DashboardComponent from '../../components/AccountComponents/DashboardComponent';
   import OrderComponent from '../../components/AccountComponents/OrderComponent';
   import { useNavigate } from 'react-router-dom';
   import { Container, ContentContainer, Header, NavigationItem, Sidebar } from './style';
   import OrderDetailComponent from '../../components/AccountComponents/OrderDetailComponent';
   import * as UserService from '../../services/UserService'
   import { resetUser } from '../../redux/slides/userSlide'
   import { useDispatch, useSelector } from 'react-redux';
   import { updateUser } from '../../redux/slides/userSlide'
   import { useMutationHooks } from '../../hooks/useMutationHook'

   const AccountPage = () => {

      

   const navigate = useNavigate();
   const dispatch = useDispatch()

   const handleOnClick = () => {
      navigate(`/`);
      setCurrentPage();
   };

   const [selectedNavItem, setSelectedNavItem] = useState('dashboard');
   const [currentPage, setCurrentPage] = useState('');


   const renderContent = () => {



   switch (selectedNavItem) {
      case 'dashboard':
         return <DashboardComponent onViewDetails={handleViewDetails}/>;
      case 'orderHistory':
         return <OrderComponent onViewDetails={handleViewDetails} />;
      case 'orderDetail':
         return <OrderDetailComponent />;
      default:
         return <DashboardComponent />;
   }
   };

   const handleViewDetails = () => {
   setSelectedNavItem('orderDetail');
   };

   const handleLogout = async () => {
      await UserService.logoutUser()
      dispatch(resetUser())
   }

   return (
      <>
      <Container>
         <Sidebar>
            <Header>Navigation</Header>
            <div>
               <NavigationItem onClick={() => setSelectedNavItem('dashboard')}>Dashboard</NavigationItem>
               <NavigationItem onClick={() => setSelectedNavItem('orderHistory')}>Order History</NavigationItem>
               <NavigationItem onClick={() => handleLogout()}>Log-out</NavigationItem>
            </div>
         </Sidebar>

      <ContentContainer>
         {renderContent()}
         {/* <OrderDetailComponent/> */}
      </ContentContainer>
      </Container>
         
      </>

   );
   };

   export default AccountPage;
