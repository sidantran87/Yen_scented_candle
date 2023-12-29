import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { CardContainer, WrapperTypeProduct } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import  slider1  from '../../assets/img/slider1.jpg'
import  slider2  from '../../assets/img/slider2.jpg'
import  slider3  from '../../assets/img/slider3.jpg'
import  slider4  from '../../assets/img/slider4.jpg'
import ProductCard from '../../components/ProductCard/ProductCard'
import FeartureComponent from '../../components/FeatureComponent/FeartureComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import {success, white, gray} from '../../color'
import aboutImage1 from '../../assets/img/About1.png'
import aboutImage2 from '../../assets/img/About2.png'

const shippingIcon = (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

)

const careIcon = (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</svg>

)

const bagIcon = (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

)

const moneybackIcon = (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
</svg>

)

function Homepage() {
   const arr =['Yên trong vườn', "Yên trong rừng", "Yên cùng Hoàng Dũng"]
   return (
      <>
         <div style={{}}> 
         <WrapperTypeProduct>
            {arr.map((item) => {
               return (
                  <TypeProduct name={item} key={item}/>
               )
            })}
         </WrapperTypeProduct>
      </div>
{/* Container */}
      <div  id='container' style={{background: '#efefef', padding: '0 60px', height:'5000px'}}>
         {/* Slider */}
         <div style={{position: 'relative'}}>
            <SliderComponent arrImg={[slider1, slider2, slider3, slider4]}/>
            {/* Feature card */}
            <div style={{width: '95%', height: '48px', padding:'40px', background: 'white', zIndex:'1', position: 'absolute', top: '380px', left:'50%', transform:'translateX(-50%)', display: 'flex', justifyContent: 'space-between', borderRadius: '8px'}}>
               <FeartureComponent svg={shippingIcon} title="Free Shipping" desc="Free shipping on all your order"/>
               <FeartureComponent svg={careIcon} title="Customer Support 24/7" desc="Instant access to Support"/>
               <FeartureComponent svg={bagIcon} title="100% Secure Payment" desc="We ensure your money is save"/>
               <FeartureComponent svg={moneybackIcon} title="Money-Back Guarantee" desc="30 Days Money-Back Guarantee"/>
            </div>
         </div>
         {/* Feature Product Section */}
         <div style={{marginTop:'100px', textAlign:'center' }}>
            {/* Feature Product Title */}
            <div style={{marginBottom: '50px', display:'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'}}>
               <p style={{fontSize:'40px', fontWeight: '600'}}>Feature Products</p>
               <div style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', gap: 4, display: 'inline-flex'}}>
                  <div style={{width: 12, height: 4, opacity: 0.30, background: '#00B207'}} />
                  <div style={{width: 40, height: 4, background: '#00B207'}} />
                  <div style={{width: 12, height: 4, opacity: 0.30, background: '#00B207'}} />
               </div>
            </div>
            {/* Feature Product list */}
            <CardContainer>
               <ProductCard/> 
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
            </CardContainer>
            {/* Load more button */}
            <div style={{paddingTop: '32px'}}>
                  <ButtonComponent size='large' labelButton="Load More" style={{background: success.default, color: white, fontFamily: 'Poppins', fontSize: '16', fontWeight: '600', borderRadius: '30px', width: '200px'}}/>
            </div>
         </div>
         {/* About us Section */}
         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
               <div  style={{display:'flex', alignItems:'center', }}>
                  <img src={aboutImage1} alt="" style={{width: '500px', height:'auto'}}/>
                  {/* Content */}
                  <div style={{display:'flex', flexDirection: 'column', alignItems:'flex-start', gap: '20px', padding:'0 40px'}}>
                     <span style={{fontSize: '14px', fontWeight: '400', color: success.default}}>About us</span>
                     <p style={{fontSize: '36px', fontWeight: '600'}}>We do Creative Things for Success</p>
                     <p style={{fontSize: '16px', fontWeight: '400', color: gray[700]}}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                     </p>
                  </div>
               </div>
               <div  style={{display:'flex', alignItems:'center', flexDirection:'row-reverse', justifyContent: 'flex-start' }}>
                  <img src={aboutImage2} alt="" style={{width: '500px', height:'auto'}}/>
                  {/* Content */}
                  <div style={{display:'flex', flexDirection: 'column', alignItems:'flex-start', gap: '20px', padding:'0 40px'}}>
                     <span style={{fontSize: '14px', fontWeight: '400', color: success.default}}>About us</span>
                     <p style={{fontSize: '36px', fontWeight: '600'}}>We do Creative Things for Success</p>
                     <p style={{fontSize: '16px', fontWeight: '400', color: gray[700]}}>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                     </p>
                  </div>
               </div>
               <ButtonComponent size='large' labelButton="Load More" style={{background: success.default, color: white, fontFamily: 'Poppins', fontSize: '16', fontWeight: '600', borderRadius: '30px', width: '200px'}}/>
         </div>
      </div>
      
      </>
      
   )
}

export default Homepage