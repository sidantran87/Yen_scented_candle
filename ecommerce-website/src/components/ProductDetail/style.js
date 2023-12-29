import styled from "styled-components";
import { success } from '../../color'
export const ProductDetailWrapper = styled.div`
   justify-content: flex-start;
   align-items: center;
   gap: 8px;
   display: inline-flex;
`

export const ProductName = styled.div`
   color: #1A1A1A;
   font-size: 36px;
   font-family: 'Poppins', sans-serif;
   font-weight: 600;
`

export const ProductStatus = styled.div`
   padding-left: 8px;
   padding-right: 8px;
   padding-top: 4px;
   padding-bottom: 4px;
   background: rgba(32, 180, 38, 0.20);
   border-radius: 4px;
   justify-content: center;
   align-items: center;
   gap: 10px;
   display: inline-flex;
   color: ${success.dark};
`

export const PriceWrapper = styled.div`
   justify-content: flex-start;
   align-items: center;
   gap: 12px;
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
   font-size: 20px;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   text-decoration: line-through;
`
export const NewPrice = styled.div`
   color: #2C742F;
   font-size: 24px;
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
   gap: 6px;
   display: inline-flex;
   color: #EA4B48;
   font-size: 14px;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
`

export const DescriptionWrapper = styled.div`
   
`