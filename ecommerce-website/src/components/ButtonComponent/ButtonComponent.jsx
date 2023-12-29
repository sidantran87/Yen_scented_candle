import React from 'react'
import { Button } from 'antd'
const ButtonComponent = ({style, size, labelButton, ...rests}) => {
  return (
   <Button {...rests} style={style} size={size} >{labelButton}</Button>
  )
}

export default ButtonComponent