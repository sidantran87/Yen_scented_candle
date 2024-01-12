import React, { useCallback } from 'react'
import { AboutContainer, AboutContent, AboutContentWrapper, AboutSpan, AboutTitle, CardContainer, FeatureCard, FeatureContent, FeatureTitle } from './style'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import slider1 from '../../assets/img/slider1.png'
import slider2 from '../../assets/img/slider2.png'
import slider3 from '../../assets/img/slider3.png'
import slider4 from '../../assets/img/slider4.png'
import ProductCard from '../../components/ProductCard/ProductCard'
import FeartureComponent from '../../components/FeatureComponent/FeartureComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { success, white, gray } from '../../color'
import About1 from "../../assets/img/About1.png";
import About2 from "../../assets/img/About2.png";
import { shippingIcon, careIcon, bagIcon, moneybackIcon } from '../../components/IconComponent/IconComponent'
import LineComponent from '../../components/LineComponent/LineComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import AboutCardComponent from '../../components/AboutCardComponent/AboutCardComponent'

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
               <div style={{ padding: '32px' }}>
                  <ButtonComponent size='large' labelButton="Load More" style={{ background: success.default, color: white, fontFamily: 'Poppins', fontSize: '16', fontWeight: '600', borderRadius: '30px', width: '200px' }} />
               </div>
            </div>
            {/* About us Section */}
            <AboutContainer>
            <AboutCardComponent
         img={About1}
         header="A Pioneer in Candle Craftsmanship"
         content="Established in 1990, Yên Candle has become a leading candle brand in Vietnam, expanding internationally in 2000. Renowned for its decorative and scented candles, Yen emphasizes art, aesthetics, and spiritual significance, continuously improving product quality over nearly two decades."
      />
            <AboutCardComponent
         direction='row-reverse'
         img={About2}
         header="Diverse Product Lines for Every Occasion"
         content="Yen Candle offers a diverse range of products, including scented candles, decorative candles, religious candles, LED-electronic candles, insect repellent candles, and high-end accessories. Specializing in interior decoration, garden, wedding parties, and meaningful gifts, Yen's products cater to various occasions and preferences."
      />
               
               <ButtonComponent size='large' labelButton="Load More" style={{ background: success.default, color: white, fontFamily: 'Poppins', fontSize: '16', fontWeight: '600', borderRadius: '30px', width: '200px', margin: '-68px 0' }} />
            </AboutContainer>
         </div>

      </>

   )
}

export default Homepage