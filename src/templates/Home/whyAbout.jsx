import React, { useEffect } from "react";
import "./whyAbout.css"; 
import Aos from "aos";
import "aos/dist/aos.css";

const WhyAbout = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

  const cardData = [
    // {
    //   heading: "Value",
    //   subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg",
    // },
    // {
    //   heading: "Value",
    //   subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg",
    // },
    // {
    //   heading: "Value",
    //   subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg",
    // },
    // {
    //   heading: "Value",
    //   subHeading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg",
    // },
  ];

  const Card = ({ heading, subHeading, imgSrc }) => (
    <div className="responsive-cell-block">
      <div className="cardImgContainer">
        <img className="cardImg" src={imgSrc} alt={heading} />
      </div>
      <div className="cardText">
        <p className="text-blk cardHeading">{heading}</p>
        <p className="text-blk cardSubHeading">{subHeading}</p>
      </div>
    </div>
  );

  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">
        <div className="imgContainer">
          <img
            className="blueDots"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"
            alt="Blue Dots"
          />
          <img
            data-aos="fade-up" data-aos-duration="600"
            className="mainImg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg"
            alt="Main"
          />
        </div>
        <div className="responsive-container-block textSide">
          <p className="text-blk heading" data-aos="fade-left" data-aos-duration="900">
            About Us
          </p>
          <p className="text-blk subHeading" data-aos="fade-left" data-aos-duration="1000">
            At Stannum HR Consultancies LLC, we specialize in providing comprehensive HR solutions and work visa 
            services in Dubai. As a trusted partner, we combine our extensive industry expertise with an 
            in-depth understanding of local regulations to deliver seamless and efficient services. 
            Our mission is to simplify the complexities of securing work visas and managing HR requirements, 
            ensuring a hassle-free experience for our clients. Whether you're an organization looking to 
            streamline your HR operations or a professional seeking a smooth relocation process, 
            Stannum HR Consultancies LLC is here to support you every step of the way.
          </p>
          <div className="cardContainer">
            {cardData.map((card, index) => (
              <Card
                key={index}
                heading={card.heading}
                subHeading={card.subHeading}
                imgSrc={card.imgSrc}
              />
            ))}
          </div>
          {/* <a href="/services">
            <button className="explore">Explore our Services</button>
          </a> */}
        </div>
        <img
          className="redDots"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
          alt="Red Dots"
        />
      </div>
    </div>
  );
};

export default WhyAbout;
