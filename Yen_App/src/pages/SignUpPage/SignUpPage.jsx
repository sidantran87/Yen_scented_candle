import React from 'react'
import BreadcrumComponent from '../../components/BreadcrumComponent/BreadcrumComponent'
import Loading from '../../components/LoadingComponent/Loading'
import { gray } from '../../color'
import { Field, FieldInput, LinkField, LoginBtn, LoginCard, LoginTitle, NormalText, Remember, SignupLink } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import * as UserService from '../../services/UserService'
import { Checkbox } from 'antd'
import { BoldText } from '../../components/ProductDetail/style'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMutationHooks } from '../../hooks/useMutationHook'

import { useMutation } from '@tanstack/react-query'

const SignUpPage = () => {

  const navigate = useNavigate()
  const handleSignInCLick = () => {
    navigate('/sign-in')
  }



  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnChangeEmail = (value) => {
  setMail(value)
  // console.log('e', e.target.value)
  }

  const handleOnchangePassword = (value) => {
  setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
  setConfirmPassword(value)
  }

  const mutation = useMutation({
    mutationFn: data => UserService.signupUser(data)
  })

  // const mutation = useMutationHooks(
  //   data => UserService.signupUser(data)
  // )

  // const { data, isLoading, isSuccess, isError } = mutation

  const handleSignUp = () => {
  mutation.mutate({ email, password, confirmPassword })
  }

  return (
    <>
      {/* <BreadcrumComponent/> */}
      <div style={{padding: '42px 60px', background: gray.bg, height: '1000px' }}>
        <LoginCard>
            <LoginTitle>Create Account</LoginTitle>
            <Field>
              <FieldInput>
                <InputFormComponent placeholder='Email' password={false} value={email} OnChange={handleOnChangeEmail} />
                <InputFormComponent placeholder='Password' password={true} value={password} OnChange={handleOnchangePassword} />
                <InputFormComponent placeholder='Confirm Password' password={true} value={confirmPassword} OnChange={handleOnchangeConfirmPassword} />
              </FieldInput>
              <LinkField>
                  <Remember>
                    <Checkbox/> <NormalText>Accept all terms & Conditionse</NormalText>
                  </Remember>
              </LinkField>
            </Field>
            {/* <Loading> */}
            <LoginBtn disabled={!email.length ||  !password.length || !confirmPassword.length}  onClick={handleSignUp} size='large'type='primary'>Create Account</LoginBtn>
            {/* </Loading> */}
            <SignupLink>
              <NormalText>Already have account</NormalText>
              <BoldText style={{cursor:'pointer'}} onClick={handleSignInCLick}>Login</BoldText>
            </SignupLink>
        </LoginCard>
    </div>
    </>
  )
}

export default SignUpPage