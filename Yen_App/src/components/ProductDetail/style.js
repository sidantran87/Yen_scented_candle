import styled from "styled-components";
import { success } from '../../color'
import { Input } from "antd";
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
   padding: 16px 0
`

export const DescTitle = styled.div`
   font-size: 20px;
   font-family: 'Poppins';
   font-weight: 600;

`
export const DescContent = styled.div`
   font-size: 14;
   font-family: 'Poppins';
   font-weight: 400;
   padding-top: 16px;
   line-height: 26px
`

export const QuantityWrapper = styled.div`
   padding: 8px;
   /* margin: 0px; */
   background: white;
   border-radius: 170px;
   border: 1px solid #E6E6E6;
   justify-content: center;
   align-items: center;
   display: inline-flex;
`

export const QuanityButton = styled.div`
   background: #F2F2F2;
   width: 30px;
   border-radius: 170px;
   cursor: pointer;
`

export const QuanityInput = styled(Input)`
   width: 40px;
   font-family: 'Poppins', sans-serif;
   text-align: center;
`

export const CTAWrapper = styled.div`
   padding: 20px 0;
   display: flex;
   justify-content: space-between;
   align-items: center
`

export const CTABtn = styled.div`
   display: flex;
   gap: 10px;
   padding: 0 20px
`

export const BuyNowBtn = styled.div`
   width: 300px;
   height: 50px;
`

export const CartBtn = styled.div`
   width: 300px;
   height: 50px;
`
export const BoldText = styled.div`
   color: #1A1A1A;
   font-size: 14px;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
`