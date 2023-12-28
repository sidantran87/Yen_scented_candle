import { Input } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
const InputComponent = ({size, placeholder, style, ...rests}) => {
  return (
   <Input prefix={<SearchOutlined/>} size={size} placeholder={placeholder} style={style} {...rests}/>
  )
}

export default InputComponent