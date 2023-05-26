import carousel1 from 'assets/carousel_images/carousel1.jpeg';
import carousel2 from 'assets/carousel_images/carousel2.jpeg';
import carousel3 from 'assets/carousel_images/carousel3.jpeg';
import carousel4 from 'assets/carousel_images/carousel4.jpeg';
import carousel5 from 'assets/carousel_images/carousel5.jpeg';
import carousel6 from 'assets/carousel_images/carousel6.jpeg';
import carousel7 from 'assets/carousel_images/carousel7.jpeg';
import carousel8 from 'assets/carousel_images/carousel8.jpeg';
import carousel9 from 'assets/carousel_images/carousel9.jpeg';

export const CarouselsImages = [
  { id: 1, carouselImage: carousel1 },
  { id: 2, carouselImage: carousel2 },
  { id: 3, carouselImage: carousel3 },
  { id: 4, carouselImage: carousel4 },
  { id: 5, carouselImage: carousel5 },
  { id: 6, carouselImage: carousel6 },
  { id: 7, carouselImage: carousel7 },
  { id: 8, carouselImage: carousel8 },
  { id: 9, carouselImage: carousel9 },
];

export const Responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
