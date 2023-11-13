"use client"
import React from 'react'
import Form from './Form'
import Link from 'next/link';

export const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
        <footer className="pb-5 ">
            <div className="container">
             <div className="row">
             <div className="d-flex align-items-start justify-content-between">             
               <div className="col-lg-1 col-12 position-relative">
               <div className="text-transform">
               <h2 className="d-flex text-center">
               <span>S</span>
                  <span>S</span>                  
                  <span className="px-2"></span>
                   <span>G</span>
                  <span>R</span>
                  <span>O</span>
                  <span>U</span>
                  <span>P</span>
               
                 
                  </h2>
               </div>
               </div>
               <div className="ssgroupfooter col-lg-11 col-12 border border-color">
                  <div className="col-lg-8 col-12 m-auto">
                  <div className="col-12 float-start border-bottom border-color pb-5 mb-5">
                  <div className="col-12 float-start text-center title mb-3">
                                <h3 className="border-0 text-white">REQUEST A CALL BACK</h3>
                            </div>
                  <Form/>  
                  </div>
                  <div className="col-12 float-start">
                    <div className="row">
                    <div className="col-lg-4 col-12">
                          <div className="addressbox">
                              <span>T</span>
                              <p><a href="tel:+911244335100">+91-124-4335100</a></p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12">
                          <div className="addressbox">
                              <span>E</span>
                              <p><a href="mailto:sales@ssgroup-india.com">sales@ssgroup-india.com</a></p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-12 flex-center align-items-start">
                          <div className="addressbox">
                              <span>A</span>
                              <p>77, SS House, <br />
Sector- 44, Gurgaon,<br />
(Haryana)- 122003</p>
                          </div>
                        </div>
                    </div>
                  </div>
                  </div>
               </div>
            </div>
            <div className="col-12 float-left">
                <div className="col-lg-11 col-12 float-end border-top border-color mt-5 pt-2 copyrights">
                <div className="row">
                    <div className="col-lg-6 col-12">
                      <p>&copy; {currentYear} | All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 col-12 text-end">
                      <p><Link href="https://triverseadvertising.com/" target="_blank">site : triverse</Link></p>
                    </div>
                </div>
                </div>
            </div>
             </div>
            </div>
        </footer>
    </>
  )
}
