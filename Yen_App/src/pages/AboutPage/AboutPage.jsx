import React from "react";
import AboutCardComponent from "../../components/AboutCardComponent/AboutCardComponent";
import About1 from "../../assets/img/About1.png";
import About2 from "../../assets/img/About2.png";
import About3 from "../../assets/img/About3.png";
const AboutPage = () => {
return (
   <>
      <div style={{paddingTop: '60px'}}>
      <AboutCardComponent
         img={About1}
         header="A Pioneer in Candle Craftsmanship"
         content="Established in 1990, Yên Candle has become a leading candle brand in Vietnam, expanding internationally in 2000. Renowned for its decorative and scented candles, Yen emphasizes art, aesthetics, and spiritual significance, continuously improving product quality over nearly two decades."
      />
      </div>
      <div>
      <AboutCardComponent
         direction='row-reverse'
         img={About2}
         header="Diverse Product Lines for Every Occasion"
         content="Yen Candle offers a diverse range of products, including scented candles, decorative candles, religious candles, LED-electronic candles, insect repellent candles, and high-end accessories. Specializing in interior decoration, garden, wedding parties, and meaningful gifts, Yen's products cater to various occasions and preferences."
      />
      </div>
      <div>
      <AboutCardComponent
         img={About3}
         header="Illuminating Beauty and Spiritual Value"
         content="With a vision of Beauty for Life, Yen Candle is committed to enhancing the spiritual value of users' lives. The company's mission revolves around bringing top-quality products with respect, love, and responsibility to the community. Recognizing the universal symbolism of candlelight in spiritual rituals worldwide, Yen's candles aim to bring faith, love, and hope to everyone, making them a symbol of warmth and love across different cultures."
      />
      </div>
   </>
);
};

export default AboutPage;
