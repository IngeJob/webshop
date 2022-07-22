import React from 'react';

import { images } from '../../constant'
import './about.css'

const About = () => {
  return (
    <section className='shop__about section__padding app__wrapper' id='about'>
      <article  className='shop__about-article app__wrapper_info'>
        <h3 className='p__cormorant'>Lorem ipsum</h3>
        <p className='p__opensans'>Somos una electrónica dedicada a la venta de todo tipo de árticulos ya sean prendas de vestir así como equipo electrónico, realizamos enviós a nivel nacional mediante Correntrega</p>
        <div className='shop__about-article_img'>
          <img src={images.about} alt='about' />
        </div>
      </article>

      <aside className='shop__about-aside app__wrapper_img'>
        <img src={images.manager} alt='manager' />
        <div className='shop__about-aside_info'>
          <h6 className='p__opensans'>Juan Perez</h6>
          <h5 className='p__cormorant'>Gerente</h5>
        </div> 
      </aside>
    </section>
  )
}

export default About