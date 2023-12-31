import { Button, Col, Input } from 'antd'
import styled from 'styled-components'
import {gray, success, white} from '../../color'
export const FooterContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 100px;
`

export const SubcribeWrapper = styled.div`
   width: 100%;
   height: 162px;
   background: ${gray[50]};
   display: flex;
   justify-content: space-around;
   align-items: center;
`

export const Footer = styled.div`
   width: 100%;
   background-color: ${gray[900]};
   display: flex;
   gap: 10px;
   justify-content: space-around;
   padding: 60px 0 ;
`
export const LogoTitle = styled(Col)`
   display: flex;
   align-items: center;
   gap: 8px;
   
   img {
      border-radius: 100%;
      width: 32px;
   }
`

export const LogoText = styled.span`
   font-weight: bold;
   font-size: 32px;
   font-weight: '500';
   color: #000;
   text-align: center
`

export const Copyright = styled.div`
   box-shadow: 0px -1px 0px ${gray[800]};
   background-color: ${gray[900]};
   padding: 10px 0;
   color: ${gray[400]};
   font-size: 14px;
   font-family: 'Poppins';
   font-weight: 400;
   text-align: center;
`

export const Company = styled.div`
   width: 20%;
   display: flex;
   flex-direction:column;
   gap: 16px
`
export const Account = styled.div`

`
export const Help = styled.div`

`
export const ProxyContainer = styled.div`

`
export const Download = styled.div`

`
export const CTAWrapper = styled.div`
   display: flex;
   gap:16px
`
export const FooterTitleRow = styled.div`
   color: ${white};
   font-size: 20;
   font-weight: 500;
   padding-bottom: 20px
`

export const FooterRow = styled.div`
   color: ${gray[400]};
   font-size: 14px;
   font-family: 'Poppins';
   font-weight: 400;
`

export const SubscribeHeader = styled.div`
   color: #1A1A1A;
   font-size: 24px;
   font-family: 'Poppins';
   font-weight: 500;
`
export const SubscribeText = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding-top: 4px
`;

export const InputEmail = styled(Input)`
  border-radius: 100px;
  position: relative;
  font-family: 'Poppins';
  width: 350px;
`;
export const ButtonEmail = styled(Button)`
   border-radius: 100px;
   font-family: 'Poppins';
   position: relative;
   right: 30px;
   background: ${success.default}
`

export const FooterRowContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`

export const AboutTitle = styled.span`
  color: white;
  font-size: 20px;
`;

export const AboutText = styled.span`
  color: ${gray[400]};
  font-size: 14px;
  font-weight: 400;
`;

export const Special = styled.div`
  color: white;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  box-shadow: 0px 1.5px 0px #20B526;
`

export const SpecialOr = styled.div`
  color: #808080;
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: 400;
`;