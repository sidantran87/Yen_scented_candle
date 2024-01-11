   import styled from 'styled-components';
import { gray, success } from '../../color';

   export const FlexContainer = styled.div`
   display: flex;
   align-items: stretch;
   gap: 24px;
   margin-bottom: 24px;
   `;

   export const ProfileContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   flex: 3;
   border: 1px solid ${gray[200]};
   border-radius: 8px;
   padding: 32px;
   `;

   export const Avatar = styled.img`
   width: 1000px;
   height: auto;
   border-radius: 100px;
   `;

   export const ProfileDetails = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   margin-top: 20px;
   text-align: center;
   `;

   export const EditProfileLink = styled.div`
   color: ${success.default};
   font-size: 16px;
   font-weight: 500;
   padding-top: 26px;
   cursor: pointer
   `;

   export const AddressContainer = styled.div`
   flex: 3;
   border: 1px solid ${gray[200]};
   border-radius: 8px;
   padding: 32px;
   `;

   export const BillingTitle = styled.div`
   color: ${success.default};
   font-size: 14px;
   font-weight: 500;
   text-transform: uppercase;
   `;

   export const AddressDetails = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin-top: 20px;
   `;

   export const EditAddressLink = styled.div`
   color: ${success.default};
   font-size: 16px;
   font-weight: 500;
   padding-top: 26px;
   cursor: pointer
   `;

   export const RecentOrderHistoryContainer = styled.div`
   border: 1px solid ${gray[200]};
   border-radius: 8px;
   padding-bottom: 30px;
   `;

   export const OrderHistoryHeader = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px 24px;
   `;

   export const OrderHistoryTitle = styled.div`
   color: ${success.default};
   font-size: 20px;
   font-weight: 500;
   `;

   export const ViewAllLink = styled.div`
   color: ${success.default};
   font-size: 16px;
   font-weight: 500;
   cursor: pointer;
   `;

export const OrderDetailBox = styled.div`
  height: fit-content;
  border: 1px solid ${gray[100]};
  border-radius: 8px;
  padding: 20px;
  gap: 20px;
`;

   export const PinkText = styled.div`
   color: ${success.default};
   font-size: 14px;
   font-weight: 500;
   cursor: pointer;
   `;
   export const OrderDetailsContainer = styled.div`
   display: flex;
   height: fit-content;
   border: 1px solid ${gray[100]};
   border-radius: 8px;
   padding: 20px;
   gap: 20px;
`;

export const OrderDetailsHeader = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 16px 24px;
`;

export const OrderDetailsTitle = styled.div`
   color: ${gray[900]};
   font-size: 20px;
   font-weight: 500;
`;

export const OrderDetailsDate = styled.div`
   color: ${gray[400]};
   font-size: 14px;
   font-weight: 400;
`;
export const OrderHeader = styled.div`
color: ${gray[400]};
font-size: 14px;
font-weight: 500;
text-transform: uppercase;
padding: 0 0 18px;
`;

export const OrderName = styled.div`
  color: ${gray[900]};
  font-size: 16px;
  font-weight: 400;
  padding: 14px 0 8px;
`;

export const OrderAdd = styled.div`
  color: ${gray[600]};
  font-size: 14px;
  font-weight: 400;
`;
export const OrderRowTitle = styled.div`
  color: ${gray[400]};
  font-size: 12px;

  font-weight: 500;
  text-transform: uppercase;
`;
export const OrderRowDetail = styled.div`
  width: 282px;
  color: ${gray[900]};
  font-size: 14px;
  font-weight: 400;
`;

export const EmailRowContainer = styled.div`
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  display: inline-flex;
  padding: 36px 0 12px;
`;

export const PhoneRowContainer = styled.div`
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  display: inline-flex;
`;

export const PaymentContainer = styled.div`
  border: 1px solid ${gray[100]};
  border-radius: 8px;
  flex: 1;
`;

export const PaymentDetail1 = styled.div`
  color: ${gray[900]};
  font-size: 14px;

  font-weight: 400;
`
export const PaymentDetailContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`
export const PaymentHeader = styled.div`
  color: ${gray[600]};
  font-size: 14px;

  font-weight: 400;
`;
export const PaymentBody = styled.div`
  color: ${gray[900]};
  font-size: 14px;

  font-weight: 500;
`;
export const TotalHeader = styled.div`
  color: ${gray[900]};
  font-size: 18px;

  font-weight: 400;
`;

export const TotalBody = styled.div`
  color: #742C57;
  font-size: 18px;

  font-weight: 600;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${gray[100]}
`;