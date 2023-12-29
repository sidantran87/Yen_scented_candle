import React from 'react'
import {success} from '../../color.js'
const FeartureComponent = ({svg='', title, desc}) => {
  return (
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', gap: '16px'}}>
      <div style={{width: '40px', color:success.default}}>
         {svg}
      </div>
      <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
         <p style={{color: '#1A1A1A', fontSize: 16, fontWeight: '600'}}>{title}</p>
         <p style={{color: '#999999', fontSize: 14, fontWeight: '400'}}>{desc}</p>
      </div>
   </div>
  )
}

export default FeartureComponent