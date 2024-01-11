
import { Input } from 'antd';
import React from 'react';

const FormInputComponent = (props) => {
  const { Title, Placeholder, Padding = '16px', Height, isOptional } = props;

  return (
    <div style={{ paddingBottom: Padding, display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }} {...props}>
      <div style={{ fontSize: 14, fontWeight: '400' }}>
        {Title} {isOptional && <span style={{ color: '#808080', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400' }}>(optional)</span>}
      </div>
      <Input style={{ height: Height }} size="large" placeholder={Placeholder}></Input>
    </div>
  )
}

export default FormInputComponent;
