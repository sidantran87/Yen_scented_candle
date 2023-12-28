import React from "react";
import { ProductHeader, ProductInfo, ProductInfoWrapper, ProductPrice, ProductRating, WrapperCard } from "./style";
import {warning} from '../../color.js'
// const { Meta } = Card;

const ProductCard = () => {
   return (
      <WrapperCard
            hoverable
            style={{ width: 248 }}
            bodyStyle={{padding: '12px 16px 16px'}}
            cover={<img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
               />
      }
      >
      <ProductInfoWrapper>
         <ProductInfo>
            <ProductHeader>Green Apple</ProductHeader>
            <ProductPrice>$14.99</ProductPrice>
            <ProductRating>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
         <path d="M6.2066 9.44078L8.57098 10.9385C8.87323 11.1298 9.24823 10.8452 9.1586 10.4923L8.47572 7.80541C8.45644 7.73057 8.45866 7.6518 8.48214 7.57816C8.50563 7.50453 8.54942 7.43902 8.60847 7.38916L10.7287 5.62478C11.007 5.39303 10.8637 4.93066 10.5056 4.90741L7.73697 4.72741C7.66243 4.72212 7.59093 4.69577 7.53078 4.65142C7.47063 4.60707 7.42431 4.54656 7.39722 4.47691L6.36448 1.87666C6.33635 1.80276 6.28644 1.73916 6.22134 1.69428C6.15624 1.6494 6.07904 1.62537 5.99998 1.62537C5.92091 1.62537 5.84371 1.6494 5.77861 1.69428C5.71351 1.73916 5.6636 1.80276 5.63548 1.87666L4.60273 4.47691C4.57569 4.54663 4.5294 4.60722 4.46925 4.65164C4.4091 4.69606 4.33756 4.72246 4.26298 4.72778L1.49435 4.90778C1.1366 4.93066 0.992601 5.39303 1.27123 5.62478L3.39148 7.38953C3.45047 7.43936 3.49421 7.50481 3.51769 7.57837C3.54118 7.65193 3.54344 7.73062 3.52423 7.80541L2.89123 10.2973C2.7836 10.7207 3.23398 11.0623 3.59623 10.8324L5.79373 9.44078C5.85549 9.40152 5.92716 9.38066 6.00035 9.38066C6.07354 9.38066 6.14521 9.40152 6.20697 9.44078H6.2066Z" fill= {warning}/>
         </svg>   
            </ProductRating>
      </ProductInfo>
         <div>
            
         </div>
      </ProductInfoWrapper>
      </WrapperCard>
   );
};

export default ProductCard;
