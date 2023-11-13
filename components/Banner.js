"use client"
import React, { useEffect, useRef } from 'react';
import Aboutus from '@/public/about-banner.jpg';
import Image from 'next/image';
import styles from '@/app/About.module.css'
export const Banner = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(-${scrollY * 0.2}px)`; // Adjust the factor for the desired parallax effect
      }
    };

    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleParallax);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <>
      <section>
        <div className={`banner col-12 float-start`}>
          <div className="row">
            <div className={`col-12 p-0 ${styles.parallaxContainer}`}>
            <div className={`${styles.parallaxImage}`}>
              <div className={styles.parallaxImageInner} ref={imageRef}>
                <Image src={Aboutus} alt="Banner" />
              </div>
              </div>             
              </div>
            </div>
          </div>
      </section>
    </>
  );
};