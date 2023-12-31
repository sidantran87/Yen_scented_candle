import { Col } from 'antd'
import styled from 'styled-components'
import {gray} from '../../color'
export const FooterContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 80px;
   margin-top: 100px;
`

export const SubcribeWrapper = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   
`

export const Footer = styled.div`
   background-color: ${gray[900]};
   display: flex;
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
   background-color: ${gray[900]}
`

export const Company = styled.div`
   display: flex;
   flex-direction:column
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
   
`

export const FooterRow = styled.div`
   color: ${gray[400]};
   font-size: 14px;
   font-family: 'Poppins';
   font-weight: 400;
`