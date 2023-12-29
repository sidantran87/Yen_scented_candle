import { Card } from "antd";
import styled from "styled-components";
import {success} from '../../color'
export const WrapperCard = styled(Card)`

   & img {
      width: 246px;
      height: 246px;
      object-fit: cover;
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

export const ProductPrice = styled.div`
   font-family: Poppins;
   font-size: 1rem;
   font-style: normal;
   font-weight: 500;
   line-height: 150%; /* 1.5rem */
`

export const ProductRating = styled.div`
   display: flex;
   align-items: flex-start;
   padding-top: 6px
`