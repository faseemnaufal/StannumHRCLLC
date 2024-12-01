import React from 'react'
import Footer from '../components/footer'
import Footer1 from '../components/footer1'
import Header from '../components/header'
import VacancyList from '../templates/Vacancies/vacancyList'
import VacancyMainBanner from '../templates/Vacancies/vacancyMainBanner'

export default function VacanciesPage() {
  return (
    <div>
      <Header />
      <VacancyMainBanner />
      <VacancyList />
      <Footer1 />
      <Footer />
    </div>
  )
}
