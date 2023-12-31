import React from 'react'
import { Account, CTAWrapper, Company, Copyright, Download, Footer, FooterContainer, FooterRow, FooterTitleRow, Help, LogoText, LogoTitle, ProxyContainer, SubcribeWrapper } from './style'
import { Button, Input } from 'antd'
import {gray} from '../../color'

const FooterComponent = () => {
  return (
    <FooterContainer>
        <SubcribeWrapper>
          <LogoTitle>
              <img src="https://placewaifu.com/image/999" alt="" />
              <LogoText  style={{fontFamily: 'Yellowtail',fontWeight: '400'}}>"Yên" Scented Candle</LogoText>
          </LogoTitle>
          <div>
            <p style={{color: '#1A1A1A', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500'}}>Subcribe our Newsletter</p>
            <p style={{fontSize: '14px', fontWeight: '400'}}>Pellentesque eu nibh eget mauris congue mattis matti.</p>
          </div>
          <div style={{display: 'flex'}}>
            <Input style={{borderRadius: '100px', position:'relative', fontFamily: 'Poppins',width:'350px'}} placeholder='Your email address'/>
            <Button size='large' style={{borderRadius: '100px', fontFamily: 'Poppins', position:'relative', right:'30px'}} type='primary'>Subcribe</Button>
          </div>
        </SubcribeWrapper>
        <Footer>
          <Company>
            <span style={{color: 'white', fontSize: 20, }}>About Shopery</span>
            <span style={{color: gray[400], fontSize: 14, fontWeight:'400' }}>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</span>
            <CTAWrapper>
              <div style={{boxShadow: '0px 1.5px 0px #20B526', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color:'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500'}}>(219) 555-0114</div>
              </div>
              <div style={{color: '#808080', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400'}}>or</div>
              <div style={{boxShadow: '0px 1.5px 0px #20B526', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{color: 'white', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500'}}>Proxy@gmail.com</div>
              </div>
            </CTAWrapper>
          </Company>
          <Account>
            <FooterTitleRow>My Account</FooterTitleRow>
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
              <FooterRow>My Account</FooterRow>
              <FooterRow>Order History</FooterRow>
              <FooterRow>Shoping Cart</FooterRow>
              <FooterRow>Wishlist</FooterRow>
              <FooterRow>Settings</FooterRow>
            </div>
          </Account>
          <Help>
          <FooterTitleRow>Helps</FooterTitleRow>
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
              <FooterRow>Contact</FooterRow>
              <FooterRow>Faqs</FooterRow>
              <FooterRow>Terms & Condition</FooterRow>
              <FooterRow>Privacy Policy</FooterRow>
            </div>
          </Help>
          <ProxyContainer>
          <FooterTitleRow>Proxy</FooterTitleRow>
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
              <FooterRow>About</FooterRow>
              <FooterRow>Shop</FooterRow>
              <FooterRow>Product</FooterRow>
              <FooterRow>Products Details</FooterRow>
              <FooterRow>Track Order</FooterRow>
            </div>
          </ProxyContainer>
          <Download>
          <FooterTitleRow>Download our Mobile App</FooterTitleRow>
          <div style={{display:'flex', gap: '8px'}}>
          <div>
            <div style={{padding: 10, background: '#333333', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
              <div style={{width: 28, height: 28, position: 'relative'}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

            </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 100, color: '#B3B3B3', fontSize: 11, fontFamily: 'Poppins', fontWeight: '400'}}>Download on the</div>
            <div style={{width: 100, height: 24.49, color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500'}}>App Store</div>
        </div>
              </div>
              </div>
              <div>
            <div style={{padding: 10, background: '#333333', borderRadius: 4, justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'inline-flex'}}>
              <div style={{width: 28, height: 28, position: 'relative'}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

            </div>
        <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 100, color: '#B3B3B3', fontSize: 11, fontFamily: 'Poppins', fontWeight: '400'}}>Download on the</div>
            <div style={{width: 100, height: 24.49, color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500'}}>App Store</div>
        </div>
              </div>
              </div>
          </div>
          </Download>
        </Footer>
        <Copyright>3</Copyright>
    </FooterContainer>
  )
} 

export default FooterComponent