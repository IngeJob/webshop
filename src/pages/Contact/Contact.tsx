import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import './contact.css';

const Contact = () => {
  return (
    <div className='app__wrapper section__padding' id='contact'>
    <div className='shop__contact app__wrapper_info'>
      <h1 className='h1__cormorant'>Ya contamos con local físico</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Cordova, Av. Simon Bolivar y Sudamerica</p>
        <p className='p__cormorant' style={{marginTop: '2rem'}}>Horario de atención</p>
        <p className='p__opensans'>Lun - Vie: 8:00 - 18:00</p>
        <p className='p__opensans'>Sab y Dom: 9:00 - 13:00</p>
      </div>
      <a href='https://api.whatsapp.com/send?phone=593999999999' target='_blank' rel='noreferrer' ><FaWhatsappSquare /></a>
    </div>

    <div className='app__wrapper_img'>
      <iframe title='maps' width="520" height="400" frameBorder="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+(estatua%20de%20la%20libertad)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  </div>
  )
}

export default Contact