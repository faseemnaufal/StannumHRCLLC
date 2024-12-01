import React from 'react'
import Footer from '../components/footer'
import Footer1 from '../components/footer1'
import Header from '../components/header'
import AboutCIC from '../templates/Home/aboutCIC'
import LatestJobs from '../templates/Home/latestJobs'
import HomeMainBanner from '../templates/Home/mainBanner'
import HomeMission from '../templates/Home/mission'
import WhyAbout from '../templates/Home/whyAbout'

export default function HomePage() {
  return (
    <div>
      <Header />
      <HomeMainBanner />
      <WhyAbout />
      <AboutCIC />
      <HomeMission />
      <LatestJobs />
      <Footer1 />
      <Footer />
    </div>
  )
}
