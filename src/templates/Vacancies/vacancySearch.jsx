import React from "react";
import "./vacancySearch.css";

const VacancySearch = () => {
  const jobs = [
    {
      title: "Nurse - House - Female",
      contract: "2 Years",
      location: "UAE",
      description: "Should have a good communication skill, having gulf experience is extra advantage",
    },
    {
      title: "Driver - House - Male",
      contract: "2 Years",
      location: "UAE",
      description: "Should have a good communication skill, having gulf experience is extra advantage",
    },
    {
      title: "Cook - House - Male",
      contract: "2 Years",
      location: "UAE",
      description: "Good knowledge in Arabic Food Cooking ",
    },
    {
      title: "Housemaid",
      contract: "2 Years",
      location: "UAE",
      description: "Gulf Experienced Housemaid",
    },
  ];

  return (
    <div>
      {/* <section className="search">
        <h2>Find Your Dream Job</h2>
        <form action="#" method="get">
          <input type="text" name="keywords" placeholder="Keywords" />
          <input type="text" name="location" placeholder="Location" />
          <input type="text" name="company" placeholder="Company" />
          <button type="submit">Search</button>
        </form>
      </section> */}
      <section className="job-listings">
        <h2 className="job-h2">Latest Job Listings</h2>
        <ul className="job-ul">
          {jobs.map((job, index) => (
            <li key={index}>
              <h3>{job.title}</h3>
              <p>Contract Period: {job.contract}</p>
              <p>Location: {job.location}</p>
              <p>Description: {job.description}</p>
              <a href="#">Apply Now</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default VacancySearch;
