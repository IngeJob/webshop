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
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />}  />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
