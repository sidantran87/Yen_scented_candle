   import styled from 'styled-components';
import { gray } from '../../color';

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
   color: #B2006B;
   font-size: 16px;
   font-family: 'Poppins';
   font-weight: 500;
   padding-top: 26px;
   `;

   export const AddressContainer = styled.div`
   flex: 3;
   border: 1px solid ${gray[200]};
   border-radius: 8px;
   padding: 32px;
   `;

   export const BillingTitle = styled.div`
   color: #999999;
   font-size: 14px;
   font-family: 'Poppins';
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
   color: #B2006B;
   font-size: 16px;
   font-family: 'Poppins';
   font-weight: 500;
   padding-top: 26px;
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
   color: #1A1A1A;
   font-size: 20px;
   font-family: 'Poppins';
   font-weight: 500;
   `;

   export const ViewAllLink = styled.div`
   color: #B2006B;
   font-size: 16px;
   font-family: 'Poppins';
   font-weight: 500;
   `;