
import React from 'react'
import BreadcrumComponent from '../../components/BreadcrumComponent/BreadcrumComponent'
import { gray} from '../../color'
import { Checkbox } from 'antd'
import { Field, FieldInput, LinkField, LoginBtn, LoginCard, LoginTitle, NormalText, Remember, SignupLink } from './style'
import { BoldText } from '../../components/ProductDetail/style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import * as UserService from '../../services/UserService'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMutationHooks } from '../../hooks/useMutationHook'



const SignInPage = () => {
  const navigate = useNavigate()
  const handleSignUpCLick = () => {
    navigate('/sign-up')
  }

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )

  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeEmail = (value) => {
  setMail(value)
  // console.log('e', e.target.value)
  }

  const handleOnchangePassword = (value) => {
  setPassword(value)
  }


  const { data, isLoading, isSuccess, isError } = mutation

  const handleSignin = () => {
    mutation.mutate({ email, password })
  }

  return (
    <>
      {/* <BreadcrumComponent/> */}
      <div style={{padding: '42px 60px', background: gray.bg, height: '1000px' }}>
        <LoginCard>
            <LoginTitle>Sign In</LoginTitle>
            <Field>
              <FieldInput>
                <InputFormComponent value={email} OnChange={handleOnChangeEmail}  placeholder='Email' password={false}/>
                <InputFormComponent value={password} OnChange={handleOnchangePassword}  placeholder='Password' password={true}/>
              </FieldInput>
              <LinkField>
                  <Remember>
                    <Checkbox/> <NormalText>Remember me</NormalText>
                  </Remember>
                  <NormalText style={{cursor:'pointer'}}>Forget Password</NormalText>
              </LinkField>
            </Field>
            <LoginBtn disabled={!email.length ||  !password.length} onClick={handleSignin} size='large'type='primary'>Login</LoginBtn>
            <SignupLink>
              <NormalText>Don’t have account?</NormalText>
              <BoldText style={{cursor:'pointer'}} onClick={handleSignUpCLick}>Register</BoldText>
            </SignupLink>
        </LoginCard>
    </div>
    </>
    
  )
}

export default SignInPage