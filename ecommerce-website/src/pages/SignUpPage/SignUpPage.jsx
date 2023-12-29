import React from 'react'
import BreadcrumComponent from '../../components/BreadcrumComponent/BreadcrumComponent'
import { gray } from '../../color'
import { Field, FieldInput, LinkField, LoginBtn, LoginCard, LoginTitle, NormalText, Remember, SignupLink } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { Checkbox } from 'antd'
import { BoldText } from '../../components/ProductDetail/style'

const SignUpPage = () => {
  return (
    <>
      <BreadcrumComponent/>
      <div style={{padding: '42px 60px', background: gray.bg, height: '1000px' }}>
        <LoginCard>
            <LoginTitle>Create Account</LoginTitle>
            <Field>
              <FieldInput>
                <InputFormComponent placeholder='Email' password={false}/>
                <InputFormComponent placeholder='Password' password={true}/>
                <InputFormComponent placeholder='Confirm Password' password={true}/>
              </FieldInput>
              <LinkField>
                  <Remember>
                    <Checkbox/> <NormalText>Accept all terms & Conditionse</NormalText>
                  </Remember>
              </LinkField>
            </Field>
            <LoginBtn size='large'type='primary'>Login</LoginBtn>
            <SignupLink>
              <NormalText>Already have account</NormalText>
              <BoldText>Login</BoldText>
            </SignupLink>
        </LoginCard>
    </div>
    </>
  )
}

export default SignUpPage