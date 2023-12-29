import styled from "styled-components";

export const WrapperTypeProduct =styled.div`
   padding: 16px 60px;
   display: flex;
   justify-content: flex-start;
   gap: 32px;
   font-size: 1rem;
   color: black;
   cursor: pointer;
   
   &:hover {
      color: red
   }
`

export const CardContainer = styled.div`
   display: flex;
   gap: 20px;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
`