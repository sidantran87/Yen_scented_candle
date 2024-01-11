import React, { useEffect, useState } from 'react'
import {Col, Button, Badge, Popover} from 'antd'
import { WrapperHeader, LogoText, WrapperAccount, LogoTitle, Wrapperleft, LogOutBTN, PopBTN } from './style'
import SearchButton from '../SearchButtonComponent/SearchButton';
import {gray, success} from '../../color.js'
import {cartIcon, userIcon} from '../../components/IconComponent/IconComponent.jsx'
import { WrapperTypeProduct } from '../../pages/Homepage/style.js';
import TypeProduct from '../TypeProduct/TypeProduct.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/ico/logo.png'
import {useSelector, useDispatch} from 'react-redux'
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
import { searchProduct } from '../../redux/slides/productSlide';

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
   const [currentPage, setCurrentPage] = useState('');
   const dispatch = useDispatch()
   const user = useSelector((state) => state.user)
   const [userName, setUserName] = useState('')
   const [userAvatar, setUserAvatar] = useState('')
   const [search,setSearch] = useState('')
   const [isOpenPopup, setIsOpenPopup] = useState(false)
   const order = useSelector((state) => state.order)

   const handlePopoverVisibleChange = (visible) => {
      setIsOpenPopup(visible);
   };

   const navigate = useNavigate();

   const handleOnClick = (page) => {
   navigate(`/${page}`);
   setCurrentPage(page);
   };

   const handleLogout = async () => {
      await UserService.logoutUser()
      dispatch(resetUser())
    }

   useEffect(() => {
      setUserName(user?.name)
      setUserAvatar(user?.avatar)
    }, [user?.name, user?.avatar])

   const content = (
      <div style={{cursor:'pointer'}}>
         <PopBTN onClick={() => handleClickNavigate('profile')}>Dashboard</PopBTN>
         {user?.isAdmin && (
            <PopBTN>System Management</PopBTN>
         )}
         <PopBTN>Order History</PopBTN>
         <LogOutBTN onClick={() => handleClickNavigate()}>Log-out</LogOutBTN>
      </div>
   )

   const handleClickNavigate = (type) => {
      if(type === 'profile') {
        navigate('/my-account')
      }else if(type === 'admin') {
        navigate('/system/admin')
      }else if(type === 'my-order') {
        navigate('/my-account',{ state : {
            id: user?.id,
            token : user?.access_token
          }
        })
      }else {
        handleLogout()
      }
      setIsOpenPopup(false)
    }

    const onSearch = (e) => {
      setSearch(e.target.value)
      dispatch(searchProduct(e.target.value))
    }

   return (
      <div style={{width: '100%', position: 'relative'}}>
         <WrapperHeader >
            <Col span={6}>
               <LogoTitle onClick={() => handleOnClick('')}>
                  <img style={{height: '50px', width: 'auto'}} src={logo} alt="" />
                  <LogoText  style={{fontFamily: 'Poppins',fontWeight: '500'}}>Yên Candle</LogoText>
               </LogoTitle>
            </Col>
            <Col span={8}>
               <SearchButton size="large" labelButton="Search" backgroundButton={success.default} borderButton="0px 6px 6px 0px" borderSearch= "6px 0px 0px 6px" onChange={onSearch} />
            </Col>
            <Col span={8}>
            <Wrapperleft>
               

               {user?.access_token ? (
                  <>
                  {userAvatar ? (
                  <img src={userAvatar} alt="avatar" style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                  }}/>
               ): 
                  (
                     <div style={{width:'26px'}}>{userIcon}</div>
                  )
               }
                     <Popover 
                           content={content}
                           trigger="hover"
                           visible={isOpenPopup}
                           onVisibleChange={handlePopoverVisibleChange}>
                        <div style={{ cursor: 'pointer',maxWidth: 200, padding: '20px 30px 20px 6px', overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                     </Popover>
                  </>
               ): (
                  <WrapperAccount >
                     <Button onClick={() => handleOnClick('sign-in')} size='large' style={{background: success.default, fontFamily: 'Poppins'}} type='primary'>Login</Button>
                     <Button onClick={() => handleOnClick('sign-up')} size='large' style={{fontFamily: 'Poppins'}} type='default'>Register</Button>
                  </WrapperAccount>
               )}

               {!isHiddenCart && (
                  <div onClick={() => handleOnClick('my-cart')} style={{cursor: 'pointer', display: 'flex'}}>
                  {/* count={order.orderItems ? order.orderItems.length : 0} */}
                     <div onClick={() => handleOnClick('my-cart')} style={{margin: '0 16px'}}>
                     <Badge count={order?.orderItems?.length}  color={success.dark} style={{fontFamily: 'Poppins'}}>
                        <div style={{width:'26px'}}>{cartIcon}</div>
                     </Badge>
                     </div>
                     <div>
                        <div style={{color: gray[700], fontSize: '11px', fontWeight: '400'}}>Shopping Cart</div>
                        <div style={{color: gray[900], fontSize: '14px', fontWeight: '500'}}>$57.00</div>
                     </div>
                  </div>
               )}
            </Wrapperleft>
            </Col>

         </WrapperHeader>
         <div>
         <WrapperTypeProduct>
            <div onClick={() => handleOnClick('')} style={{ color: currentPage === '' && success.default }}>
               <TypeProduct name={'Home'} />
            </div>
            <div onClick={() => handleOnClick('type')} style={{ color: currentPage === 'type' && success.default }}>
               <TypeProduct name={'Product'} />
            </div>
            <div onClick={() => handleOnClick('about')} style={{ color: currentPage === 'about' && success.default }}>
               <TypeProduct name={'About us'} />
            </div>
            <div onClick={() => handleOnClick('my-account')} style={{ color: currentPage === 'my-account' && success.default }}>
               <TypeProduct name={'Account'} />
            </div>
      </WrapperTypeProduct>
         </div>
      </div>
   )
}

export default HeaderComponent