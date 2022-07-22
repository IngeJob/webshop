import { AutoSlider } from '../../components';

import './home.css'

const Home = () => {
  return (
    <section className='shop__header section__padding' id='home'>
    <div className='shop__header-h1 app__wrapper_info' >
      <h1 className='h1__cormorant' >Los mejores productos y ofertas</h1>
    </div>
    <AutoSlider />
  </section>
  )
}

export default Home