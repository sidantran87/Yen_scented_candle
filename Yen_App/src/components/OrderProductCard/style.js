import styled from 'styled-components';
import { gray } from '../../color';
import { Button } from 'antd';

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
`;

export const CartContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px 24px;
`;

export const CartRow = styled.div`
  flex: 3;
  border: 1px solid ${gray[100]};
  border-radius: 8px;
`;