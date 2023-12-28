import { Row, Col } from "antd";
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
   width: 100vw;
   padding: 24px 60px;
   background: #fff;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: nowrap;
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
   font-size: 1.5rem ;
   color: #000;
   text-align: center
`

export const WrapperAccount = styled.div`
   display:flex;
   
   gap:10px;

   button {
      width: 94px;
   }
`

export const Wrapperleft = styled(Col)`
   display:flex;
   /* justify-content: flex-end; */
   /* justify-content: space-between; */
   /* align-items: center; */

   /* svg {
      width:34px;
      padding-left: 20px
   } */
`

export const WrapperMenu = styled.nav`
   display: flex;
   justify-content: flex-start;
   list-style-type: none;
   gap: 32px;
   font-size: 1rem;
   color: black;
   ;
   cursor: pointer;
   
   li {
      transition: color 0.3s ease
   }

   li:hover {
      color: #00B207
   }
`
