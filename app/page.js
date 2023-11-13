"use client"
import React, { useEffect, useState, useRef } from 'react';
import { Slick } from '@/components/Slider'
import { About } from '@/components/About'
import { Numbers } from '@/components/Numbers'
import { Projectslider } from '@/components/Projectslider'
import Accordian from '@/components/Accordian'
import Loader from '@/components/Loader';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { News } from '@/components/News';
import ScrollDown from '@/components/ScrollDown';
import CustomCursor from '@/components/CustomCursor';
import Scroller from '@/components/Scroller'
import projectData from '@/json/project.json';

export default function Home() {
  const smoothRef = useRef(null);
  // const firstheading = 'RESIDENCES BY SS GROUP';
  // const secondheading = 'RETAIL BY SS GROUP';
  const [loading, setLoading] = useState(true);

  const categoryData = projectData.categories;
  // console.log(categoryData);
  if (!categoryData) {
    return <p>Error</p>;
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!loading) {
      const loaderElement = document.querySelector('.loader');
      if (loaderElement) {
        loaderElement.classList.add('hideloader'); 
      }
    }
  }, [loading]);
 
  return (
    <>
      {/* <Loader /> */}
      
      <CustomCursor/>
      <Header />      
      <Scroller>
      <main className="d-flex flex-wrap float-start col-12">
      <section id='slider'>
      <div className='col-12 float-start homeslider position-relative'>
        <Slick />
        <ScrollDown targetRef={smoothRef} />        
        </div>
        <News />
        </section>
        <section id="about" ref={smoothRef}>
         <About />
       </section>
        <Numbers />
        <Projectslider categoryData={categoryData} />
        <Accordian faqData={""}/>
      </main>
      </Scroller>
      <Footer />
    </>
  );
}
