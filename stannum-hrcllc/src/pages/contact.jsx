import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import ContactMainBanner from '../templates/Contact/contactMainBanner'
import ContactForm from '../templates/Contact/contactForm'

export default function ContactPage() {
  return (
    <div>
      <Header />
      <ContactMainBanner />
      <ContactForm />
      <Footer />
    </div>
  )
}
