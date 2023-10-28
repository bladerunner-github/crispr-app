import React, { useState, useEffect } from 'react';
import SliderData from './SliderData';
import '../styles/Slider.css';
import leftarrow from '../assets/left_arrow.png'
import rightarrow from '../assets/right_arrow.png'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); 

    return () => {
      clearInterval(interval); 
    };
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <div className='container'>
        <button className=' left-arrow' onClick={prevSlide} >
          <img src={leftarrow} alt='left-arrow' width={14} height={16}></img>
        </button>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='travel image' className='image' />
              )}
            </div>
          );
        })}
        <button className=' right-arrow' onClick={nextSlide} >
          <img src={rightarrow} alt='right arrow' width={12} height={14}></img>
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
