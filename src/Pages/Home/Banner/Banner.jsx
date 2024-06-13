import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/Images/image-01.jpg';
import img2 from '../../../assets/Images/image-02.jpg';
import img5 from '../../../assets/Images/image-05.jpg';
import img6 from '../../../assets/Images/image-06.jpg';
import img7 from '../../../assets/Images/image-07.jpg';
import img8 from '../../../assets/Images/image-08.jpg';
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />        
      </div>
      <div>
        <img src={img2} />        
      </div>
      <div>
        <img src={img5} />       
      </div>
      <div>
        <img src={img6} />       
      </div>
      <div>
        <img src={img7} />       
      </div>
      <div>
        <img src={img8} />       
      </div>
    </Carousel>
  );
};

export default Banner;
