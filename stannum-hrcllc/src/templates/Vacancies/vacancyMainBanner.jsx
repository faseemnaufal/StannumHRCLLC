import React from 'react'
import "./vacancyMainBanner.css"
import VacancyImage from "../../images/vacancy1.jpg"

export default function VacancyMainBanner() {
  return (
    <div>
      <div>
        <div style={{ position: "relative" }}>
            <img className="vacancy-home-image" alt="" src={VacancyImage} />
          {/* <div class="vacancyBannerparallax"></div> */}
          <div className="vacancy-image-text-box">
            <div className="vacancy-image-background-text">
              <h1 className="vacancy-image-topic">
                Vacancies
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
