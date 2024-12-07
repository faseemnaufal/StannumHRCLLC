import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Footer1 from '../components/footer1'
import ContactMainBanner from '../templates/Contact/contactMainBanner'
import ContactForm from '../templates/Contact/contactForm'

export default function ContactPage() {
  return (
    <div>
      <Header />
      <ContactMainBanner />
      <ContactForm />
      <Footer1  />
      <Footer />
    </div>
  )
}
