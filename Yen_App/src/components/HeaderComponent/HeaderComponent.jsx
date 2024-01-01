import React from 'react'
import {Col, Button, Badge} from 'antd'
import { WrapperHeader, LogoText, WrapperAccount, LogoTitle, Wrapperleft } from './style'
import SearchButton from '../SearchButtonComponent/SearchButton';
import {success} from '../../color.js'
import {cartIcon} from '../../components/IconComponent/IconComponent.jsx'
import { WrapperTypeProduct } from '../../pages/Homepage/style.js';
import TypeProduct from '../TypeProduct/TypeProduct.jsx';
import { useNavigate } from 'react-router-dom';


const HeaderComponent = () => {
   const arr =['Home', "Product", "About us", "Account"]

   const navigate = useNavigate();

   const handleOnClick = (page) => {
   navigate(`/${page}`);
   };
   return (
      <div style={{width: '100%', position: 'relative'}}>
         <WrapperHeader>
            <Col span={6}>
               <LogoTitle>
                  <img src="https://placewaifu.com/image/999" alt="" />
                  <LogoText  style={{fontFamily: 'Yellowtail',fontWeight: '400'}}>"Yên" Scented Candle</LogoText>
               </LogoTitle>
            </Col>
            <Col span={8}>
               <SearchButton size="large" labelButton="Search" backgroundButton={success.default} borderButton="0px 6px 6px 0px" borderSearch= "6px 0px 0px 6px" />
            </Col>
            <Col span={6}>
            <Wrapperleft>
               <WrapperAccount >
                  <Button onClick={() => handleOnClick('sign-in')} size='large' style={{background: success.default, fontFamily: 'Poppins'}} type='primary'>Login</Button>
                  <Button onClick={() => handleOnClick('sign-up')} size='large' style={{fontFamily: 'Poppins'}} type='default'>Register</Button>
               </WrapperAccount>
               <div>
                  <Badge count={5} color={success.dark} style={{fontFamily: 'Poppins'}}>
                     <div style={{width:'26px'}}>{cartIcon}</div>
                  </Badge>
               </div>
            </Wrapperleft>
            </Col>
         </WrapperHeader>
         <div>
         <WrapperTypeProduct>
            {arr.map((item) => {
               return (
                  <TypeProduct name={item} key={item}/>
               )
            })}
         </WrapperTypeProduct>
         </div>
      </div>
   )
}

export default HeaderComponent