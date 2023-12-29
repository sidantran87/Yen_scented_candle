import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { AboutContainer, AboutContent, AboutContentWrapper, AboutSpan, AboutTitle, CardContainer, FeatureCard, FeatureContent, FeatureTitle, WrapperTypeProduct } from './style'
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
import {shippingIcon, careIcon, bagIcon, moneybackIcon} from '../../components/IconComponent/IconComponent'
import LineComponent from '../../components/LineComponent/LineComponent'


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
      <div  id='container' style={{background: gray.bg, padding: '0 60px', height:'5000px'}}>
         {/* Slider */}
         <div style={{position: 'relative'}}>
            <SliderComponent arrImg={[slider1, slider2, slider3, slider4]}/>
            {/* Feature card */}
            <FeatureCard>
               <FeartureComponent svg={shippingIcon} title="Free Shipping" desc="Free shipping on all your order"/>
               <FeartureComponent svg={careIcon} title="Customer Support 24/7" desc="Instant access to Support"/>
               <FeartureComponent svg={bagIcon} title="100% Secure Payment" desc="We ensure your money is save"/>
               <FeartureComponent svg={moneybackIcon} title="Money-Back Guarantee" desc="30 Days Money-Back Guarantee"/>
            </FeatureCard>
         </div>
         {/* Feature Product Section */}
         <div style={{marginTop:'100px', textAlign:'center' }}>
            {/* Feature Product Title */}
            <FeatureContent>
               <FeatureTitle>Feature Products</FeatureTitle>
               <LineComponent/>
            </FeatureContent>
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
         <AboutContainer>
               <div  style={{display:'flex', alignItems:'center', }}>
                  <img src={aboutImage1} alt="" style={{width: '500px', height:'auto'}}/>
                  {/* Content */}
                  <AboutContentWrapper>
                     <AboutSpan>About us</AboutSpan>
                     <AboutTitle>We do Creative Things for Success</AboutTitle>
                     <AboutContent>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                     </AboutContent>
                  </AboutContentWrapper>
               </div>
               <div  style={{display:'flex', alignItems:'center', flexDirection:'row-reverse'}}>
                  <img src={aboutImage2} alt="" style={{width: '500px', height:'auto'}}/>
                  {/* Content */}
                  <AboutContentWrapper>
                     <AboutSpan>About us</AboutSpan>
                     <AboutTitle>We do Creative Things for Success</AboutTitle>
                     <AboutContent>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                     </AboutContent>
                  </AboutContentWrapper>
               </div>
               <ButtonComponent size='large' labelButton="Load More" style={{background: success.default, color: white, fontFamily: 'Poppins', fontSize: '16', fontWeight: '600', borderRadius: '30px', width: '200px'}}/>
         </AboutContainer>
      </div>
      
      </>
      
   )
}

export default Homepage