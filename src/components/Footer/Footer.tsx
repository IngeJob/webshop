import React from 'react';

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './footer.css'

const Footer = () => {
  return (
    <div className='shop__footer section__padding'>
    <div className='shop__footer-links'>
      <a href='https://www.facebook.com/profile.php?id=100082913294031' target='_blank' rel='noreferrer' ><FiFacebook /></a>
      <a href='https://www.instagram.com/testdevworld/' target='_blank' rel='noreferrer' ><FiInstagram /></a>
      <FiTwitter />
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Lorem Ipsum. Todos los derechos reservados</p>
    </div>
  </div>
  )
}

export default Footer