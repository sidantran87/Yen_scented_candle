import React, { useState } from 'react'
import FormInputComponent from '../../components/FormInputComponent/FormInputComponent'
import { Button, Checkbox, Divider, Input, Radio, Space,  } from 'antd'
import { NormalText, Remember } from '../SignInPage/style'
import { DividerLine, OrderRowTitle, PaymentBody, PaymentContainer, PaymentDetail1, PaymentDetailContainer1, PaymentHeader, PaymentRow, TotalBody, TotalHeader } from '../../components/AccountComponents/style'

const PaymentPage = () => {

   const [value, setValue] = useState(1);

   const onChange = (e) => {
     console.log('radio checked', e.target.value);
     setValue(e.target.value);
   };

  return (
    <div style={{padding: '0 24px'}}>

   <div style={{padding:'38px 0 20px',fontSize: '24px', fontWeight: '500'}}>Billing Information</div>
   <div style={{display: 'flex', gap: '24px'}}>
         <div style={{flex: 2}}>
            <div style={{display: 'flex', gap: '16px'}}>
               <FormInputComponent Padding="14px" Title={'First name'} Placeholder={'Your first name'} />
               <FormInputComponent Padding="14px" Title={'Last name'} Placeholder={'Your last name'} />
               <FormInputComponent Title="Company Name" Placeholder="Enter company name" isOptional/>
            </div>
            <FormInputComponent Title={'Street Address'} Placeholder={'Address'} />
            <div style={{display: 'flex', gap: '16px'}}>
               <FormInputComponent Title={'Email'} Placeholder={'Email address'} />
               <FormInputComponent Title={'Phone'} Placeholder={'Phone number'} />
            </div>
            <Remember style={{padding: '20px 0 32px'}}>
               <Checkbox/> <NormalText>Ship to a different address</NormalText>
            </Remember>
            <DividerLine></DividerLine>
            <div style={{padding:'32px 0 20px',fontSize: '24px', fontWeight: '500'}}>Additional Info</div>
            <FormInputComponent Height='120px'  Padding="14px" Title={'Order Notes (Optional)'} Placeholder={'Notes about your order, e.g. special notes for delivery'} />
         </div>
         <div style={{flex: 1}}>
         <PaymentContainer style={{padding: '24px'}}>
               <div style={{display: 'flex', gap: '20px', padding: '0 0px 12px'}}>
                     <PaymentDetailContainer1>
                        <div style={{fontSize: 20, fontWeight: '500'}}>Order Summery</div>
                     </PaymentDetailContainer1>
               </div>
               <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
                     <img style={{width: '60px', height: '60px', objectFit: 'contain'}} src="https://placewaifu.com/image/200" alt="" />
                     <div>Woodsy Fireside 9oz</div>
                     <div>x5</div>
                  </div>
                  <div>$70.00</div>
               </div>
               <div style={{padding: '18px 20px'}}>
                     <PaymentRow style={{padding: '12px 0'}}>
                     <PaymentHeader>Subtotal:</PaymentHeader>  
                     <PaymentBody>$84.00</PaymentBody>
                     </PaymentRow>
                     <DividerLine></DividerLine>
                     <PaymentRow style={{padding: '12px 0'}}>
                     <PaymentHeader>Shipping:</PaymentHeader>
                     <PaymentBody>Free</PaymentBody>
                     </PaymentRow>
                     <DividerLine></DividerLine>
                     <PaymentRow style={{padding: '12px 0'}}>
                        <div style={{fontSize: '16px', fontWeight: '400', }}>Total:</div>
                        <TotalBody>$84.00</TotalBody>
                     </PaymentRow>
                     <div style={{padding:'24px 0', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                        <div style={{fontSize: 20, fontWeight: '500'}}>Payment Method</div>
                        <div>
                        <Radio.Group onChange={onChange} value={value}>
                           <Space direction="vertical">
                           <Radio value={1}>Cash on Delivery</Radio>
                           <Radio value={2}>MoMo</Radio>
                           <Radio value={3}>ZaloPay</Radio>
                           </Space>
                           </Radio.Group>
                        </div>
                     </div>
                     <PaymentRow style={{width: '100%'}}>
                        <Button style={{borderRadius: '40px', textAlign: 'center', margin:'0 auto', width: '100%',color: 'white', fontSize: 16, fontWeight: '700'}} size='large' type='primary'>Check out</Button>
                     </PaymentRow>
               </div>
               </PaymentContainer>
         </div>
    </div>
    </div>
  )
}

export default PaymentPage