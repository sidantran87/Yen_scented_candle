import React from 'react'
import {Col, Button, Badge} from 'antd'
import { WrapperHeader, LogoText, WrapperAccount, WrapperMenu, LogoTitle, Wrapperleft } from './style'
import SearchButton from '../SearchButtonComponent/SearchButton';
import {success} from '../../color.js'
import {cartIcon} from '../../components/IconComponent/IconComponent.jsx'
const HeaderComponent = () => {
   return (
      <div>
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
                  <Button size='large' style={{background: success.default, fontFamily: 'Poppins'}} type='primary'>Login</Button>
                  <Button size='large' style={{fontFamily: 'Poppins'}} type='default'>Register</Button>
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
         <WrapperMenu  style={{fontFamily: 'Poppins'}}>
            <li>Home</li>
            <li>Product</li>
            <li>About us</li>
            <li>Account</li>
         </WrapperMenu>

         </div>
      </div>
   )
}

export default HeaderComponent