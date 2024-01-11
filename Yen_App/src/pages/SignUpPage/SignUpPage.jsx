import React, { useEffect } from 'react'
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
import * as Message from '../../components/Message/Message'

import { useMutation } from '@tanstack/react-query'

import { useSelector } from 'react-redux'

const SignUpPage = () => {


  const navigate = useNavigate()
  const handleSignInCLick = () => {
    navigate('/sign-in')
  }

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptBox, setAcceptBox] = useState('')

  const handleOnChangeEmail = (value) => {
    setMail(value)
  }
  const handleOnchangeFullName = (value) => {
    setName(value)
  }
  const handleOnchangePhone = (value) => {
    setPhone(value)
  }

  const handleOnchangePassword = (value) => {
  setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
  setConfirmPassword(value)
  }

  const handleOnchangeAcceptBox = (value) => {
    setAcceptBox(value)
  }

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )

  const { data, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      Message.success()
      handleSignInCLick()
    } else if (isError) {
      Message.error()
    }
  }, [isSuccess, isError])

  const handleSignUp = () => {
  mutation.mutate({name, email, password, confirmPassword })
  }

  return (
    <>
      {/* <BreadcrumComponent/> */}
      <div style={{padding: '42px 60px', background: gray.bg, height: '1000px' }}>
        <LoginCard>
            <LoginTitle>Create Account</LoginTitle>
            <Field>
              <FieldInput>
                <InputFormComponent placeholder='Full Name' value={name} OnChange={handleOnchangeFullName} />
                <InputFormComponent placeholder='Phone Number' value={phone} OnChange={handleOnchangePhone} />
                <InputFormComponent placeholder='Email' password={false} value={email} OnChange={handleOnChangeEmail} />
                <InputFormComponent placeholder='Password' password={true} value={password} OnChange={handleOnchangePassword} />
                <InputFormComponent placeholder='Confirm Password' password={true} value={confirmPassword} OnChange={handleOnchangeConfirmPassword} />
              </FieldInput>
              <LinkField>
                  <Remember>
                    <Checkbox checked={acceptBox} onChange={(e) => handleOnchangeAcceptBox(e.target.checked)}/> <NormalText>Accept all terms & Conditionse</NormalText>
                  </Remember>
              </LinkField>
            </Field>
            {/* <Loading> */}
            <LoginBtn disabled={!email.length ||  !password.length || !confirmPassword.length ||!name.length || !acceptBox}  onClick={handleSignUp} size='large'type='primary'>Create Account</LoginBtn>
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