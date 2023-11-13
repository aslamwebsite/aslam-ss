import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Category = ({ categoryToShow, scroll, slugValue }) => {
    const projectSliders = useRef([]);
    return (
        <>
         {categoryToShow.LuxuryResidences ?
        <section className='category-section' ref={scroll}>
            <div className='container'>
                <div className='web-container row'>
                    <div className='title col-12 float-start text-center'>
                        <h3>On Going Project</h3>
                    </div>
                    {Object.keys(categoryToShow.LuxuryResidences).map((pd1, index) => (
                            <div key={index} className='col-lg-6 col-12'>
                                <Link href={"/projects/" + slugValue + "/" + categoryToShow.LuxuryResidences[index].slug}>
                                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryToShow.LuxuryResidences[index].imageSrc ?
                                            <Image src={categoryToShow.LuxuryResidences[index].imageSrc} width='680' height='680' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryToShow.LuxuryResidences[index].ProjectName}</h4>
                                                <p>{categoryToShow.LuxuryResidences[index].location}</p>
                                                <p><a href="#">Know More</a></p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        
                </div>
            </div>
        </section>
        : null}
         {categoryToShow.PremiumResidences ?
        <section className='category-section'>
            <div className='container'>
                <div className='web-container row'>
               
                    <div className='title col-12 float-start text-center'>
                        <h3>Ready To Move-In</h3>
                    </div>
                    {Object.keys(categoryToShow.PremiumResidences).map((pd1, index) => (
                            <div key={index} className='col-lg-6 col-12'>
                                <Link href="">
                                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryToShow.PremiumResidences[index].imageSrc ?
                                            <Image src={categoryToShow.PremiumResidences[index].imageSrc} width='680' height='680' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryToShow.PremiumResidences[index].ProjectName}</h4>
                                                <p>{categoryToShow.PremiumResidences[index].location}</p>
                                                <p><a href="#">Know More</a></p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </section>
         : null}
          {/* {categoryToShow.DeliveredProjects ?
        <section className='category-section'>
            <div className='container'>
                <div className='web-container row'>
               
                    <div className='title col-12 float-start text-center'>
                        <h3>On Going Project</h3>
                    </div>
                    {Object.keys(categoryToShow.DeliveredProjects).map((pd1, index) => (
                            <div key={index} className='col-lg-6 col-12'>
                                <Link href="">
                                    <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                                        <figure className='snip0016'>
                                            {categoryToShow.DeliveredProjects[index].imageSrc ?
                                            <Image src={categoryToShow.DeliveredProjects[index].imageSrc} width='680' height='680' alt='' />
                                            : null}
                                            <figcaption>
                                                <h4>{categoryToShow.DeliveredProjects[index].ProjectName}</h4>
                                                <p>{categoryToShow.DeliveredProjects[index].location}</p>
                                                <p><a href="#">Know More</a></p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </section>
        : null} */}
        </>
    );
};

export default Category;
