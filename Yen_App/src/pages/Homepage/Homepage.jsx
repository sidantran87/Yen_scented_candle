import React, { useCallback } from 'react'
import { AboutContainer, AboutContent, AboutContentWrapper, AboutSpan, AboutTitle, CardContainer, FeatureCard, FeatureContent, FeatureTitle } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/img/slider1.jpg'
import slider2 from '../../assets/img/slider2.jpg'
import slider3 from '../../assets/img/slider3.jpg'
import slider4 from '../../assets/img/slider4.jpg'
import ProductCard from '../../components/ProductCard/ProductCard'
import FeartureComponent from '../../components/FeatureComponent/FeartureComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { success, white, gray } from '../../color'
import aboutImage1 from '../../assets/img/About1.png'
import aboutImage2 from '../../assets/img/About2.png'
import { shippingIcon, careIcon, bagIcon, moneybackIcon } from '../../components/IconComponent/IconComponent'
import LineComponent from '../../components/LineComponent/LineComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'

function Homepage() {
   const fetchProductAll = async () => {
      const res = await ProductService.getAllProduct();
      console.log('res', res);
      return res;
   }
   const { isLoading, data: products } = useQuery({queryKey: 'products', queryFn: fetchProductAll, retry: 3, retryDelay: 1000})
   console.log('data', products)

   return (
      <>
         <div style={{ height: 'fit-content' }}>
         </div>
         {/* Container */}
         <div id='container' style={{ background: white, padding: '0 60px' }}>
            {/* Slider */}
            <div style={{}}>
               <SliderComponent style={{ position: 'relative', zIndex: 1, borderRadius: '100px' }} arrImg={[slider1, slider2, slider3, slider4]} />
               {/* Feature card */}
               <FeatureCard style={{ zIndex: '2' }}>
                  <FeartureComponent svg={shippingIcon} title="Free Shipping" desc="Free shipping on all your order" />
                  <FeartureComponent svg={careIcon} title="Customer Support 24/7" desc="Instant access to Support" />
                  <FeartureComponent svg={bagIcon} title="100% Secure Payment" desc="We ensure your money is save" />
                  <FeartureComponent svg={moneybackIcon} title="Money-Back Guarantee" desc="30 Days Money-Back Guarantee" />
               </FeatureCard>
            </div>
            {/* Feature Product Section */}
            <div style={{ textAlign: 'center' }}>
               {/* Feature Product Title */}
               <FeatureContent>
                  <FeatureTitle>Feature Products</FeatureTitle>
                  <LineComponent />
               </FeatureContent>
               {/* Feature Product list */}
               <CardContainer>
                  {products?.data?.map((product) => {
                     return (
                        <ProductCard style={{}} key={product._id}
                           countInStock={product.countInStock}
                           description={product.description}
                           image={product.image}
                           name={product.name}
                           price={product.price}
                           rating={product.rating}
                           type={product.type}
                           selled={product.selled}
                           discount={product.discount}
                           id={product._id} />
                     )
                  })}
               </CardContainer>
               {/* Load more button */}
               <div style={{ paddingTop: '32px' }}>
                  <ButtonComponent size='large' labelButton="Load More" style={{ background: success.default, color: white, fontFamily: 'Poppins', fontSize: '16', fontWeight: '600', borderRadius: '30px', width: '200px' }} />
               </div>
            </div>
            {/* About us Section */}
            <AboutContainer>
               <div style={{ display: 'flex', alignItems: 'center', }}>
                  <img src={aboutImage1} alt="" style={{ width: '500px', height: 'auto' }} />
                  {/* Content */}
                  <AboutContentWrapper>
                     <AboutSpan>About us</AboutSpan>
                     <AboutTitle>We do Creative Things for Success</AboutTitle>
                     <AboutContent>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                     </AboutContent>
                  </AboutContentWrapper>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
                  <img src={aboutImage2} alt="" style={{ width: '500px', height: 'auto' }} />
                  {/* Content */}
                  <AboutContentWrapper>
                     <AboutSpan>About us</AboutSpan>
                     <AboutTitle>We do Creative Things for Success</AboutTitle>
                     <AboutContent>
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                     </AboutContent>
                  </AboutContentWrapper>
               </div>
               <ButtonComponent size='large' labelButton="Load More" style={{ background: success.default, color: white, fontFamily: 'Poppins', fontSize: '16', fontWeight: '600', borderRadius: '30px', width: '200px' }} />
            </AboutContainer>
         </div>

      </>

   )
}

export default Homepage