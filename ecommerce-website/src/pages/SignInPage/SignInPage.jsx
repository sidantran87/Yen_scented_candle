
import React from 'react'
import BreadcrumComponent from '../../components/BreadcrumComponent/BreadcrumComponent'
import { gray} from '../../color'
import { Checkbox } from 'antd'
import { Field, FieldInput, LinkField, LoginBtn, LoginCard, LoginTitle, NormalText, Remember, SignupLink } from './style'
import { BoldText } from '../../components/ProductDetail/style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'

const SignInPage = () => {
  return (
    <>
      <BreadcrumComponent/>
      <div style={{padding: '42px 60px', background: gray.bg, height: '1000px' }}>
        <LoginCard>
            <LoginTitle>Sign In</LoginTitle>
            <Field>
              <FieldInput>
                <InputFormComponent placeholder='Email' password={false}/>
                <InputFormComponent placeholder='Password' password={true}/>
              </FieldInput>
              <LinkField>
                  <Remember>
                    <Checkbox/> <NormalText>Remember me</NormalText>
                  </Remember>
                  <NormalText>Forget Password</NormalText>
              </LinkField>
            </Field>
            <LoginBtn size='large'type='primary'>Login</LoginBtn>
            <SignupLink>
              <NormalText>Don’t have account?</NormalText>
              <BoldText>Register</BoldText>
            </SignupLink>
        </LoginCard>
    </div>
    </>
    
  )
}

export default SignInPage