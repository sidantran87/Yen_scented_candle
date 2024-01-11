import React from 'react'
import { AboutText, AboutTitle, Account, ButtonEmail, CTAWrapper, Company, Copyright, Download, Footer, FooterContainer, FooterRow, FooterRowContainer, FooterTitleRow, Help, InputEmail, LogoText, LogoTitle, ProxyContainer, Special, SpecialOr, SubcribeWrapper, SubscribeHeader, SubscribeText } from './style'
import { Button, Input } from 'antd'
import {gray, success} from '../../color'

const FooterComponent = () => {
  return (
    <FooterContainer>
        <SubcribeWrapper>
          <LogoTitle>
              <img src="https://placewaifu.com/image/999" alt="" />
              <LogoText  style={{fontFamily: 'Poppins'}}>Yên Candle</LogoText>
          </LogoTitle>
          <div>
            <SubscribeHeader>Subcribe our Newsletter</SubscribeHeader>
            <SubscribeText>Pellentesque eu nibh eget mauris congue mattis matti.</SubscribeText>
          </div>
          <div style={{display: 'flex'}}>
            <InputEmail placeholder='Your email address'/>
            <ButtonEmail size='large' style={{borderRadius: '100px'}} type='primary'>Subcribe</ButtonEmail>
          </div>
        </SubcribeWrapper>
        <Footer>
          <Company>
            <AboutTitle>About Shopery</AboutTitle>
            <AboutText>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</AboutText>
            <CTAWrapper>
              <Special>(219) 555-0114</Special>
              <SpecialOr>or</SpecialOr>
              <Special>Proxy@gmail.com</Special>
            </CTAWrapper>
          </Company>
          <Account>
            <FooterTitleRow>My Account</FooterTitleRow>
            <FooterRowContainer>
              <FooterRow>My Account</FooterRow>
              <FooterRow>Order History</FooterRow>
              <FooterRow>Shoping Cart</FooterRow>
              <FooterRow>Settings</FooterRow>
            </FooterRowContainer>
          </Account>
          <Help>
          <FooterTitleRow>Helps</FooterTitleRow>
            <FooterRowContainer>
              <FooterRow>Contact</FooterRow>
              <FooterRow>Faqs</FooterRow>
              <FooterRow>Terms & Condition</FooterRow>
              <FooterRow>Privacy Policy</FooterRow>
            </FooterRowContainer>
          </Help>
          <ProxyContainer>
          <FooterTitleRow>Proxy</FooterTitleRow>
            <FooterRowContainer>
              <FooterRow>About</FooterRow>
              <FooterRow>Shop</FooterRow>
              <FooterRow>Product</FooterRow>
              <FooterRow>Products Details</FooterRow>
              <FooterRow>Track Order</FooterRow>
            </FooterRowContainer>
          </ProxyContainer>
        </Footer>
        <Copyright>Yên eCommerce © 2023. All Rights Reserved</Copyright>
    </FooterContainer>
  )
} 

export default FooterComponent