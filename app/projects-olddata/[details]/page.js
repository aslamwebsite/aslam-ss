"use client"
import Accordian from '@/components/Accordian';
import { AdvanceBanner } from '@/components/AdvanceBanner';
import { Footer } from '@/components/Footer';
import { GallerySlider } from '@/components/GallerySlider';
import { Header } from '@/components/Header';
import React, { useState, useEffect } from 'react';
import { LocationMap } from '@/components/LocationMap';
import projectData from '@/json/details.json';
import Enquiry from '@/components/Enquiry';
import Link from 'next/link';

export const page = () => {
  const [showH1, setShowH1] = useState(false);
  const [showH2, setShowH2] = useState(false);
  const [showP, setShowP] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setShowH1(true);
    }, 100);

    const fadeTimeout = setTimeout(() => {
      setShowH2(true);
    }, 1000);

    const fadePTimer = setTimeout(() => {
      setShowP(true);
    }, 1500);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(fadePTimer);
    };
  }, []);

  return (
    <>
      <Header className='blackheader' />
      <main className="d-flex flex-wrap float-start col-12">
        <section>
          <div className='overview col-12 float-start pt-5'>
            <div className='container'>
              <div className="col-lg-4 col-12 m-auto text-center">
                <div className="heading">
                  {showH1 && <h1 className="runtext lh-1">{projectData.projects[0].ProjectName}</h1>}
                  {showH2 && <h2>{projectData.projects[0].Location}</h2>}
                </div>
                <div className="col-12 float-start">
                  <p className={showP ? "fade-up show" : "fade-up"}>
                    {projectData.projects[0].Overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='projectwrap'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 float-start'>
                  <div className='bannerwrap d-flex flex-wrap'>

                    <AdvanceBanner />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GallerySlider />
        <LocationMap />
        <section>
          <div className='quicklink col-12 float-start'>
            <div className='container'>
              <div className='web-container'>
                <div className='col-12 flaot-start flex-center'>
                  <div className='heading text-center border-0'>
                    <h3 className='text-uppercase'>Quick Links</h3>
                  </div>
                </div>
                <div className='col-lg-10 col-12 m-auto'>
                  <div className='row'>
                    <div className='col-lg-4 col-12'>
                    <Enquiry enquireText="BROCHURE" requestCallbackText="DOWNLOAD BROCHURE" />
                    </div>
                    <div className='col-lg-4 col-12'>
                    <Enquiry enquireText="FLOOR PLANS" requestCallbackText="DOWNLOAD FLOOR PLAN" />
                    </div>
                    <div className='col-lg-4 col-12'>
                    <Link href={`/projects/constructions`}>
                      <button className="realstatebtn text-white"><span className="text-white">CONSTRUCTION UPDATES</span></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Accordian />
      </main>
      <Footer />
    </>
  )
}
export default page;
