import { useState } from 'react';
import Hero from './components/Hero';
import Form from './components/Form';
import Slides from './components/Slides';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Hero/> 
      <Form/>
      <Slides/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
