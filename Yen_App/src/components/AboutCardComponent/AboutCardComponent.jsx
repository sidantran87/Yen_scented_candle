import React from 'react'
import { gray } from '../../color'

const AboutCardComponent = (props) => {
   const {img, header, content, direction='row', ...rests} = props
  return (
    <div style={{display:'flex',flexDirection:direction, alignItems: 'center', gap: '40px', padding: "0 60px", marginBottom: '100px'}} {...rests}>
         <img src={img} alt="" style={{maxWidth: '700px'}} />
         <div style={{display: 'flex',flexDirection:'column', gap: '32px'}}>
            <div style={{fontSize: 32, fontFamily: 'Poppins', fontWeight: '600'}}>{header}</div>
            <div style={{color: gray[600], fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', lineHeight: '24px'}}>{content}</div>
         </div>
    </div>
  )
}

export default AboutCardComponent