"use client"
import './CSS/carousel.css';
import React , { useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'

interface Slide {
    image: string;
    name: string;
    color: string;
    price: string;
  }

  interface CarouselProps {
    slides: Slide[];
    options?: EmblaOptionsType;
  }

  const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [direction, setDirection] = useState<"next" | "prev">("next");
  useEffect(() => {
    if (!emblaApi) return;

    const autoplayInterval = setInterval(() => {
      if (!emblaApi.canScrollNext() && direction === "next") {
        setDirection("prev");
      } else if (!emblaApi.canScrollPrev() && direction === "prev") {
        setDirection("next");
      }

      if (direction === "next") {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollPrev();
      }
    }, 2000);

    return () => clearInterval(autoplayInterval); // Cleanup do intervalo
  }, [emblaApi, direction]);
    return (
      <div className="carouselSpace" ref={emblaRef}>
        <div className="carouselContainer">
          {slides.map((slide, index) => (
            <div className="carouselSlide" key={index}>
              <div className="carouselSlideImage"  style={{ backgroundImage: `url(${slide.image})` }}/>
              <div  className='carouselSlideLetter'>
                <h3>{slide.name} - {slide.color}</h3>
                <h4>{slide.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Carousel;