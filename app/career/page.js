'use client'
import Accordian from '@/components/Accordian';
import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <main className="d-flex flex-wrap float-start col-12">
    <Banner />
    <section>
        <div className='container'>
            <div className='row'>
                <div className='web-container'>
                    <div className='col-lg-12 text-center'>
                        <div className='heading border-0 text-uppercase p-0'>
                            <h3>Career</h3>
                            </div>
                    </div>
                    <div className='col-12 float-start text-center mb-5'>
                        <div className='title mb-4'>
                      <h3>WORK CULTURE</h3>
                      </div>
                        <p>SS Group offers a progressive work culture and professional growth that represents the industry&apos;s best and teams that are at the very forefront of construction best practice.</p>
                        <p>The organization&apos;s work culture is stimulating and challenging which offers a whole spectrum of career prospects across a variety of functions. Work alongside imaginative and brilliant minds, and will always be inspired. Join SS Group to achieve the goals you've always set out for yourself, and we promise to make the journey along the way exciting, joyous and satisfying.</p>
                    </div>
                    <div className='col-12 float-start text-center'>
                    <div className='title mb-4'>
                      <h3>GROWTH OPPORTUNITY</h3>
                      </div>
                        <p>When our employees thrive, so does our organization. As we talk about our progressive work culture, we ensure that our employees embrace the complex situations and manage them with exceptional pace and coordination.</p>
                        <p>The company engages in training, coaching and mentoring of employees for their all-round development along the way exciting, joyous and satisfying.</p>
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