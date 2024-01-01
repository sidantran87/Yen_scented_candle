import React from 'react'
import NotFoundIllus from '../../assets/img/Illustration.png'
import { Button } from 'antd'
import { gray, success } from '../../color'
import { useNavigate } from 'react-router-dom'
function NotFoundPage() {
   const navigate = useNavigate()
   const handleClickBack = () => {
      navigate('/')
   }
   return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 60px', gap: '20px'}}>
         <img style={{width: '40%'}} src={NotFoundIllus} alt="" />
         <p style={{textAlign: 'center', color: gray[900], fontSize: 40, fontFamily: 'Poppins', fontWeight: '600'}}>Oops! page not found</p>
         <p style={{textAlign: 'center', color: gray[500], fontSize: 16, fontFamily: 'Poppins', fontWeight: '400'}}>Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis</p>
         <Button onClick={handleClickBack} style={{background:success.default, fontFamily: 'Poppins', marginTop: '24px'}} type='primary' size='large'>Back to Home</Button>
      </div>
   )
}

export default NotFoundPage