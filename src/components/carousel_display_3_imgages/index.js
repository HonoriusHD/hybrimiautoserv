import styles from "./carousel_display_3_images.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ImageComponent from "../image_component";

import { CarouselsImages, Responsive } from "./carouse_3_data";

function CarouselDisplay3Imgages() {
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={Responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={10}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {CarouselsImages.map((serviceImage) => {
          return (
            <ImageComponent
              key={serviceImage.id}
              image={serviceImage.carouselImage}
              objectFit="cover"
              imageSize="smallCardSize"
              alt="Aceasta este o reprezentare ilustrativa ce face referire la un services auto"
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselDisplay3Imgages;
