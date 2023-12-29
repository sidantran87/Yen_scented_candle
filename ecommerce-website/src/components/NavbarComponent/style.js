import styled from "styled-components"
import {gray, success} from '../../color'
export const WrapperTitle = styled.p`
   font-weight: 500;
   font-size: 20px;
   padding-bottom: 24px
`

export const WrapperProductText = styled.div`
   color: ${gray[900]};
   font-size: 14px;
   font-weight: 400;
`

export const WrapperRow = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction:column;
   gap: 20px;
   font-family: Poppins, sans-serif;
   padding-bottom: 26px
`

export const WrapperPrice = styled.div`
   width:fit-content;
   height: 41px;
   background: ${gray[100]};
   border-radius: 30px;
   text-align:center;
   align-items:center;
   padding: 16px;
   font-size:  14px;
   color: ${gray[900]};
   cursor: pointer;

   &:active {
      background: ${success.default};
      color: ${gray[100]};
   }
`
