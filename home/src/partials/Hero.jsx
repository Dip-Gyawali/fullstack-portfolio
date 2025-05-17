import React from 'react'
import TypingEffect from '../components/TypingEffect'

export default function Hero({basicInfo, role}) {
  return (
    <>
    {/* Hero Section */}
    <section id="hero" className="hero section dark-background">
    <img
      src={`${import.meta.env.VITE_IMAGE_URL}/uploads/${basicInfo?.[0]?.cover_image}`}
      alt={`${basicInfo?.[0]?.name}`}
      data-aos="fade-in"
      className="object-fit-cover"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <h1>{basicInfo?.[0]?.name}</h1>
      <p>
        I'm a <TypingEffect roles={role} />
      </p>
    </div>
  </section>
  {/* /Hero Section */}
  </>
  )
}
