import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import Image from 'next/image';

export const Projectslider = ({ categoryData }) => {
  console.log(categoryData);
  const projectSliders = useRef([]);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: false,
  };

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  return (
    <>
      {categoryData.homes ?
      <section ref={sectionRef} className={`image-effect-section ${inView ? 'in-view' : ''}`}>
        <div className='row'>
          <div className='projectslickslider pb-5 mb-5'>
            <div className='col-12 float-start text-center title'>
              <h3>Homes BY SS GROUP</h3>
            </div>
            <div className='col-11 float-end'>
            {categoryData.homes.LuxuryResidences || categoryData.homes.PremiumResidences || categoryData.homes.OngoingProjects ? 
              <>
              <Slider {...settings}>
              {categoryData.homes.LuxuryResidences && Object.keys(categoryData.homes.LuxuryResidences).map((pd1, index) => (
                  <div key={index}>
                    <div className={`projectslider ${inView ? 'image-effect' : ''}`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryData.homes.LuxuryResidences[index].imageSrc ?
                                            <Image src={categoryData.homes.LuxuryResidences[index].imageSrc} width='680' height='680' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryData.homes.LuxuryResidences[index].ProjectName}</h4>
                                                <p>{categoryData.homes.LuxuryResidences[index].location}</p>
                                                <p><a href="#">Know More</a></p>
                                       </figcaption>
                              </figure>
                        </div>
                  </div>
                ))}
                {categoryData.homes.PremiumResidences && Object.keys(categoryData.homes.PremiumResidences).map((pd1, index) => (
                  <div key={index}>
                    <div className={`projectslider ${inView ? 'image-effect' : ''}`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryData.homes.PremiumResidences[index].imageSrc ?
                                            <Image src={categoryData.homes.PremiumResidences[index].imageSrc} width='680' height='680' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryData.homes.PremiumResidences[index].ProjectName}</h4>
                                                <p>{categoryData.homes.PremiumResidences[index].location}</p>
                                                <p><a href="#">Know More</a></p>
                                       </figcaption>
                              </figure>
                        </div>
                  </div>
                ))}
              </Slider>
              </>
              : null}
            </div>
          </div>
        </div>
      </section>
      : null}
      {/* Retail Data Start */}
      {categoryData.retail ?
      <section ref={sectionRef} className={`image-effect-section ${inView ? 'in-view' : ''}`}>
        <div className='row'>
          <div className='projectslickslider pb-5 mb-5'>
            <div className='col-12 float-start text-center title'>
              <h3>Retail BY SS GROUP</h3>
            </div>
            <div className='col-11 float-end'>
            {categoryData.retail.LuxuryResidences || categoryData.retail.PremiumResidences || categoryData.retail.OngoingProjects ? 
              <>
              <Slider {...settings}>
              {categoryData.retail.LuxuryResidences && Object.keys(categoryData.retail.LuxuryResidences).map((pd1, index) => (
                  <div key={index}>
                    <div className={`projectslider ${inView ? 'image-effect' : ''}`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryData.retail.LuxuryResidences[index].imageSrc ?
                                            <Image src={categoryData.retail.LuxuryResidences[index].imageSrc} width='680' height='680' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryData.retail.LuxuryResidences[index].ProjectName}</h4>
                                                <p>{categoryData.retail.LuxuryResidences[index].location}</p>
                                                <p><a href="#">Know More</a></p>
                                       </figcaption>
                              </figure>
                        </div>
                  </div>
                ))}
                {categoryData.retail.PremiumResidences && Object.keys(categoryData.retail.PremiumResidences).map((pd1, index) => (
                  <div key={index}>
                    <div className={`projectslider ${inView ? 'image-effect' : ''}`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryData.retail.PremiumResidences[index].imageSrc ?
                                            <Image src={categoryData.retail.PremiumResidences[index].imageSrc} width='680' height='680' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryData.retail.PremiumResidences[index].ProjectName}</h4>
                                                <p>{categoryData.retail.PremiumResidences[index].location}</p>
                                                <p><a href="#">Know More</a></p>
                                       </figcaption>
                              </figure>
                        </div>
                  </div>
                ))}
                {Object.keys(categoryData.retail.OngoingProjects).map((pd1, index) => (
                  <div key={index}>
                    <div className={`projectslider ${inView ? 'image-effect' : ''}`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryData.retail.OngoingProjects[index].imageSrc ?
                                            <Image src={categoryData.retail.OngoingProjects[index].imageSrc} width='680' height='680' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryData.retail.OngoingProjects[index].ProjectName}</h4>
                                                <p>{categoryData.retail.OngoingProjects[index].location}</p>
                                                <p><a href="#">Know More</a></p>
                                       </figcaption>
                              </figure>
                        </div>
                  </div>
                ))}
              </Slider>
              </>
              : null}
            </div>
          </div>
        </div>
      </section>
      : null}
    </>
  );
};
