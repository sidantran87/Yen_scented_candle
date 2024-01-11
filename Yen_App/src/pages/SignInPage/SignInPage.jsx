
import React, { useEffect } from 'react'
import BreadcrumComponent from '../../components/BreadcrumComponent/BreadcrumComponent'
import { gray} from '../../color'
import { Checkbox } from 'antd'
import { Field, FieldInput, LinkField, LoginBtn, LoginCard, LoginTitle, NormalText, Remember, SignupLink } from './style'
import { BoldText } from '../../components/ProductDetail/style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import * as UserService from '../../services/UserService'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useMutationHooks } from '../../hooks/useMutationHook'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide'
import { jwtDecode as jwt_decode } from "jwt-decode";




const SignInPage = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation()
  const dispatch = useDispatch();
  const user  = useSelector((state) => state.user)

  const navigate = useNavigate()

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const { data, isLoading, isSuccess, isError } = mutation
  console.log('mutation: ',mutation)

  useEffect(() => {
    if (isSuccess) {
      if(location?.state) {
        navigate(location?.state)
      }else {
        navigate('/')
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    }
  }, [isSuccess])

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storage)
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token,refreshToken }))
  }

  const handleSignUpCLick = () => {
    navigate('/sign-up')
  }


  const handleOnChangeEmail = (value) => {
  setMail(value)
  // console.log('e', e.target.value)
  }

  const handleOnchangePassword = (value) => {
  setPassword(value)
  }

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