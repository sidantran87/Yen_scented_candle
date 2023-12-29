import React from 'react'
import {WrapperPrice, WrapperRow, WrapperTitle } from './style'
import { Checkbox, Rate } from 'antd';

import {warning} from '../../color'

const NavbarComponent = () => {
  const onChange = () => {}
  const renderContent = (type, options) => {
    switch (type) { 
      case 'checkbox':
        return (
          <Checkbox.Group style={{ width: '100%', fontFamily:'Poppins', display:'flex', flexDirection:'column', gap:'10px'}} onChange={onChange}>
              {options.map((options)=> {
                return (
                  <Checkbox style={{fontFamily: 'Poppins'}} value={options.value}>{options.label}</Checkbox>
                )
              })}
          </Checkbox.Group>
        )    
      case 'star':
        return options.map((options) => {
          return (
            <div>
                  <Rate style={{fontSize: '18px', color:warning }} defaultValue={options} disabled />
                  <span style={{paddingLeft:'10px'}}>{options}.0</span>
            </div>
            )})    
      case 'price':
        return options.map((options) => {
          return (
            <WrapperPrice>{options}</WrapperPrice>
            )})    
      default: 
        return {}
    }
  }
  return (
    <div style={{padding:'0', fontFamily: 'Poppins'}}>
      <div>
        <WrapperTitle>All Categories</WrapperTitle>
        <WrapperRow>
          {renderContent('checkbox', 
            [{value: 'a', label: 'Yên trong vườn'}, 
            {value: 'b', label: 'Yên trong rừng'}, 
            {value: 'c', label: 'Yên trong nhà'}])}
        </WrapperRow>
      </div>
      <div>
        <WrapperTitle>Rating</WrapperTitle>
        <WrapperRow>
          {renderContent('star',[5,4,3,2,1])}
        </WrapperRow>
      </div>
      <div>
        <WrapperTitle>Price</WrapperTitle>
        <WrapperRow style={{display: 'flex', flexWrap: 'wrap', maxWidth: '300px'}}>
          {renderContent('price',["Trên 1.000.000đ","500.000đ < 1.000.000đ","200.000đ < 500.000đ", "50.000đ < 200.000đ"])}
        </WrapperRow>
      </div>
    </div>
  )
}

export default NavbarComponent