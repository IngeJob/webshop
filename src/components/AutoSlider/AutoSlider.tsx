import React from 'react';
import {images} from '../../constant';

import './autoSlider.css';

const AutoSlider = () => {
  const input1 = React.useRef<HTMLInputElement>(null);
  const input2 = React.useRef<HTMLInputElement>(null);
  const input3 = React.useRef<HTMLInputElement>(null);
  const input4 = React.useRef<HTMLInputElement>(null);
  const input5 = React.useRef<HTMLInputElement>(null);
  var counter = 1;

  setInterval(function () {
    const myInput = eval("input"+counter).current;
    if(myInput){
      myInput.checked = true;
    }
    counter++;
    if (counter > 5) {
      counter = 1;
    }
  }, 6000);

  return (
    <div className='slider' >
      <div className='slider__container'>
        <div className='slider__slides'>
          <input type='radio' name='radio-btn' id='radio1' ref={input1} />
          <input type='radio' name='radio-btn' id='radio2' ref={input2} />
          <input type='radio' name='radio-btn' id='radio3' ref={input3} />
          <input type='radio' name='radio-btn' id='radio4' ref={input4} />
          <input type='radio' name='radio-btn' id='radio5' ref={input5} />

          <div className='slider__img slider__first'>
            <img src={images.buy_online} alt='gallery'/>
          </div>
          <div className='slider__img slider-2'>
            <img src={images.clothes} alt='gallery' />
          </div>
          <div className='slider__img slider-3'>
            <img src={images.shopping} alt='gallery' />
          </div>
          <div className='slider__img slider-4'>
            <img src={images.store} alt='gallery' />
          </div>
          <div className='slider__img slider-5'>
            <img src={images.tech} alt='gallery' />
          </div>

          <div className='slider__nav-auto'>
            <div className='auto-btn1' />
            <div className='auto-btn2' />
            <div className='auto-btn3' />
            <div className='auto-btn4' />
            <div className='auto-btn5' />
          </div>

          <div className='slider__nav-manual'>
            <label htmlFor='radio1' className='manual-btn' />
            <label htmlFor='radio2' className='manual-btn' />
            <label htmlFor='radio3' className='manual-btn' />
            <label htmlFor='radio4' className='manual-btn' />
            <label htmlFor='radio5' className='manual-btn' />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AutoSlider