import styled from "styled-components";
import { gray, success } from "../../color";
import { Button } from "antd";

export const LoginTitle = styled.div`
   color: #1A1A1A;
   font-size: 32px;
   font-family: Poppins;
   font-weight: 600;
`

export const LoginCard = styled.div`
   width: 40%;
   height: fit-content;
   padding-top: 24px;
   padding-bottom: 32px;
   padding-left: 24px;
   padding-right: 24px;
   background: white;
   box-shadow: 0px 0px 56px rgba(0, 38, 2, 0.08);
   border-radius: 8px;
   border: 1px solid #F2F2F2;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   gap: 20px;
   display: flex;
   margin: 0 auto;
`

export const Field = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: 16px;
`

export const FieldInput = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: 12px;
`
export const LinkField = styled.div`
   justify-content: space-between;
   align-items: center;
   gap: 6px;
   display: flex;
`
export const Remember = styled.div`
   display: flex;
   align-items: center;
   gap: 6px;
`

export const NormalText = styled.div`
   color: ${gray[600]};
   font-size: 14px;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
`
export const BoldText = styled.div`
   color: #1A1A1A;
   font-size: 14px;
   font-family: 'Poppins', sans-serif;
   font-weight: 500;
`

export const LoginBtn = styled(Button)`
   background: ${success.default};
   font-family: 'Poppins', sans-serif;
   border-radius: 100px;
   width: 100%;
`
export const SignupLink = styled.div`
   display: flex;
   gap: 4px;
`