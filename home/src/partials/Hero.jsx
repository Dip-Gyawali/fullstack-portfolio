import React, { useEffect, useState } from 'react'
import TypingEffect from '../components/TypingEffect'

export default function Hero() {

  const [role, setRole] = useState(null);

  useEffect(() => {
    setRole([
      {name: 'Full Stack Developer'},
      {name: 'Backend Focused'},
      {name: 'Mern Stack Developer'},
    ]);
  },[]);

  return (
    <>
    {/* Hero Section */}
    <section id="hero" className="hero section dark-background">
    <img
      src='/images/bg.jpg'
      alt={`Dip Kumar Gyawali`}
      data-aos="fade-in"
      className="object-fit-cover"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <h1>Dip Kumar Gyawali</h1>
      <p>
        I'm a <TypingEffect roles={role} />
      </p>
    </div>
  </section>
  {/* /Hero Section */}
  </>
  )
}
