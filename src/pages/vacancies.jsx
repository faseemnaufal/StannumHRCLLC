import React from 'react'
import Footer from '../components/footer'
import Footer1 from '../components/footer1'
import Header from '../components/header'
// import VacancyList from '../templates/Vacancies/vacancyList'
import VacancyMainBanner from '../templates/Vacancies/vacancyMainBanner'
import VacancySearch from '../templates/Vacancies/vacancySearch'

export default function VacanciesPage() {
  return (
    <div>
      <Header />
      <VacancyMainBanner />
      {/* <VacancyList /> */}
      <VacancySearch />
      <Footer1 />
      <Footer />
    </div>
  )
}
