import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import {white, success} from '../../color'
const SearchButton = (props) => {
   const {size, placeholder, labelButton, backgroundButton=success, colorTextBtn= white, borderButton, borderSearch} = props
   return (
      <div style={{display: 'flex', fontFamily: 'Poppins'}}>
            <InputComponent prefix={<SearchOutlined/>} size={size} placeholder={placeholder} style={{borderRadius: borderSearch}}/>
            <ButtonComponent style={{background:backgroundButton, color:colorTextBtn ,borderRadius: borderButton, fontFamily: 'Poppins'}} size={size} labelButton={labelButton}>{labelButton}</ButtonComponent>
      </div>
   )
}

export default SearchButton