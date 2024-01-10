   import styled from 'styled-components'
   import { gray } from '../../color';

   export const Container = styled.div`
   padding: 20px 60px;
   display: flex;
   gap: 20px;
   `;

   export const Sidebar = styled.div`
   flex: 1;
   height: fit-content;
   border: 1px solid ${gray[200]};
   border-radius: 8px;
   padding: 12px 0;
   `;

   export const Header = styled.h1`
   color: #1A1A1A;
   font-size: 20px;
   font-family: 'Poppins';
   font-weight: 500;
   padding: 16px 20px;
   `;

   export const NavigationItem = styled.div`
   padding: 16px 20px;
   cursor: pointer;
   `;

   export const ContentContainer = styled.div`
   flex: 3;
   `;