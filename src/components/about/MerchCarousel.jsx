import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import Carousel from "react-bootstrap/Carousel";

export default function MerchCarousel() {
  return (
    <Carousel id="merchCarousel" indicators={false}>
      <Carousel.Item
        className="carousel-item bg-cover"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Carousel.Item>
      <Carousel.Item
        className="carousel-item bg-cover"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Carousel.Item>
      <Carousel.Item
        className="carousel-item bg-cover"
        style={{
          backgroundImage: `url(${image3})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></Carousel.Item>
    </Carousel>
  );
}
