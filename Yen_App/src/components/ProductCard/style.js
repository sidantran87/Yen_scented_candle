import { Card } from "antd";
import styled from "styled-components";
import {gray, success} from '../../color'

export const WrapperCard = styled(Card)`

   border: 1px solid ${gray[200]};
   
   & img {
      width: 246px;
      height: 246px;
      object-fit: cover;
      border-top: 1px solid ${gray[200]};
      border-left: 1px solid ${gray[200]};
      border-right: 1px solid ${gray[200]};
   }

   &:hover {
      border: 1px solid ${success.dark};

      & img {
         border-top: 1px solid ${success.dark};
         border-left: 1px solid ${success.dark};
         border-right: 1px solid ${success.dark}; 
      }
   }

`

export const ProductInfoWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 0.375rem;
`

export const ProductInfo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

export const ProductHeader = styled.div`
   font-family: Poppins;
   font-size: 0.875rem;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
`

export const PriceWrapper = styled.div`
   justify-content: flex-start;
   align-items: center;
   gap: 8px;
   display: inline-flex;
`

export const PriceDetail = styled.div`
   justify-content: flex-start;
   align-items: center;
   gap: 4px;
   display: inline-flex;
`

export const OldPrice = styled.div`
   color: #B3B3B3;
   font-size: 16px;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   text-decoration: line-through;
`
export const NewPrice = styled.div`
   color: #2C742F;
   font-size: 16px;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
`

export const DiscountTag = styled.div`
   padding-left: 10px;
   padding-right: 10px;
   padding-top: 3px;
   padding-bottom: 3px;
   background: rgba(233, 75, 72, 0.10);
   border-radius: 30px;
   justify-content: flex-start;
   align-items: flex-start;
   display: inline-flex;
   color: #EA4B48;
   font-size: 12px;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
`

export const ProductRating = styled.div`
   display: flex;
   align-items: flex-start;
   padding-top: 6px
`