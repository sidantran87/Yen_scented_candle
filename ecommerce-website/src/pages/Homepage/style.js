import styled from "styled-components";
import { gray, success } from '../../color'
export const WrapperTypeProduct = styled.div`
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
   gap: 24px;
   align-items: center;
   flex-wrap: wrap;
   justify-content:center;
`

export const FeatureCard = styled.div`
   width: 95%;
   height: 48px;
   padding: 40px;
   background: white;
   z-index: 1;
   position: absolute;
   top: 380px;
   left: 50%;
   transform: translateX(-50%);
   display: flex;
   justify-content: space-between;
   border-radius: 8px;
`

export const AboutContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   `

export const AboutContentWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 20px;
   padding: 0 40px;
`
export const AboutSpan = styled.span`
   font-size: 14px;
   font-weight: 400;
   color: ${success.default};
`;
export const AboutTitle = styled.span`
   font-size: 36px;
   font-weight: 600;
`;

export const AboutContent = styled.span`
   font-size: 16px;
   font-weight: 400;
   color: ${gray[700]};
`;

export const FeatureContent = styled.div`
   margin-bottom: 50px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 16px;
`

export const FeatureTitle = styled.span`
  font-size: 40px;
  font-weight: 600;
`;