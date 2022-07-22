import { Routes, Route } from 'react-router-dom';

import { About, Contact, Home, Store } from './pages';
import { Footer, Navbar } from './components';

import './App.css';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/webshop' element={<Home />} />
        <Route path='/webshop/store' element={<Store />}  />
        <Route path='/webshop/about' element={<About />} />
        <Route path='/webshop/contact' element={<Contact />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
