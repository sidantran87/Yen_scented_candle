import React from 'react'
import {Col, Button} from 'antd'
import { WrapperHeader, LogoText, WrapperAccount, WrapperMenu, LogoTitle, Wrapperleft } from './style'
import { ShoppingCartOutlined } from '@ant-design/icons'
const HeaderComponent = () => {
   return (
      <div>
         <WrapperHeader>
            <LogoTitle span={6}>
               <img src="https://placewaifu.com/image/999" alt="" />
               <LogoText  style={{fontFamily: 'Poppins'}}>Yen Scented Candle</LogoText>
            </LogoTitle>
            <Col span={8}>
                  <WrapperMenu  style={{fontFamily: 'Poppins'}}>
                     <li>Home</li>
                     <li>Product</li>
                     <li>About us</li>
                     <li>Account</li>
                  </WrapperMenu>
            </Col>
            <Wrapperleft span={4}>
               <WrapperAccount >
                  <Button style={{background: '#00B207', fontFamily: 'Poppins'}} type='primary'>Login</Button>
                  <Button style={{fontFamily: 'Poppins'}} type='default'>Register</Button>
               </WrapperAccount>
               <ShoppingCartOutlined style={{fontSize:'100px', color: 'black'}} />
            </Wrapperleft>
         </WrapperHeader>
      </div>
   )
}

export default HeaderComponent