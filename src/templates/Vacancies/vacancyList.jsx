import React, { useEffect } from 'react'
import "./vacancyList.css"
import Aos from "aos";
import "aos/dist/aos.css";

export default function VacancyList() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div className="aboutValue-layout-228">
        <div className="aboutValue-short-heading-here1" data-aos="fade-down" data-aos-duration="500">
          Latest Vacancies
        </div>
            <div className="aboutValue-content13">
              <div className="aboutValue-column5 aboutValue-column51" data-aos="fade-up" data-aos-duration="700">
                <div className="aboutValue-section-title1">
                <div className="aboutValue-icon-relume2" />
                  <div className="aboutValue-section-title1">
                    <div className="aboutValue-heading5">{`Nurse - House - Female`}</div>
                    <div className="aboutValue-text7">
                      
                      <li>Salary: 1200 DH</li>
                      <li>Food: Provide</li>
                      <li>Accommodation: Provide</li>
                      <li>Medical: Provide</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutValue-column5 aboutValue-column52" data-aos="fade-down" data-aos-duration="700">
                <div className="aboutValue-section-title1">
                    <div className="aboutValue-icon-relume2" />
                  <div className="aboutValue-section-title1">
                    <div className="aboutValue-heading5">
                      <p className="aboutValue-the-board-plays">{`Driver - House - Male`}</p>
                    </div>
                    <div className="aboutValue-text7">
                      <li>Salary: 1200 DH</li>
                      <li>Food: Provide</li>
                      <li>Accommodation: Provide</li>
                      <li>Medical: Provide</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutValue-column5 aboutValue-column53" data-aos="fade-up" data-aos-duration="700">
                <div className="aboutValue-section-title1">
                <div className="aboutValue-icon-relume2" />
                  <div className="aboutValue-section-title1">
                    <div className="aboutValue-heading5">
                      <p className="aboutValue-the-board-plays">{`Cook - House - Male`}</p>
                    </div>
                    <div className="aboutValue-text7">
                      <li>Salary: 1200 DH</li>
                      <li>Food: Provide</li>
                      <li>Accommodation: Provide</li>
                      <li>Medical: Provide</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aboutValue-content13">
              <div className="aboutValue-column5 aboutValue-column54" data-aos="fade-up" data-aos-duration="700">
                <div className="aboutValue-section-title1">
                <div className="aboutValue-icon-relume2" />
                  <div className="aboutValue-section-title1">
                    <div className="aboutValue-heading5">{`Sample Job`}</div>
                    <div className="aboutValue-text7">
                      <li>Salary: 1200 DH</li>
                      <li>Food: Provide</li>
                      <li>Accommodation: Provide</li>
                      <li>Medical: Provide</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutValue-column5 aboutValue-column55" data-aos="fade-down" data-aos-duration="700">
                <div className="aboutValue-section-title1">
                <div className="aboutValue-icon-relume2" />
                  <div className="aboutValue-section-title1">
                    <div className="aboutValue-heading5">
                      <p className="aboutValue-the-board-plays">{`Sample Job`}</p>
                    </div>
                    <div className="aboutValue-text7">
                      <li>Salary: 1200 DH</li>
                      <li>Food: Provide</li>
                      <li>Accommodation: Provide</li>
                      <li>Medical: Provide</li>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutValue-column5 aboutValue-column56" data-aos="fade-up" data-aos-duration="700">
                <div className="aboutValue-section-title1">
                <div className="aboutValue-icon-relume2" />
                  <div className="aboutValue-section-title1">
                    <div className="aboutValue-heading5">
                      <p className="aboutValue-the-board-plays">{`Sample Job`}</p>
                    </div>
                    <div className="aboutValue-text7">
                      <li>Salary: 1200 DH</li>
                      <li>Food: Provide</li>
                      <li>Accommodation: Provide</li>
                      <li>Medical: Provide</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
