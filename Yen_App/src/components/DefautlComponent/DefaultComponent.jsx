import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

export const DefaultComponent = ({children}) => {
   return (
      <div>
         <HeaderComponent/>
         {children}
         <FooterComponent/>
      </div>
   )
}

