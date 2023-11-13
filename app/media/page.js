import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import MediaNavigation from '@/components/MediaNavigation';
import Mediatabs from '@/components/Mediatabs';
import React from 'react'


const page = () => {
  return (
    <>
        <Header className='blackheader' />
        <main className="d-flex flex-wrap float-start col-12 mt-5">
            <section>
                <div className='media'>
                    <div className='container'>
                        <div className='row'>
                            <div className=' flex-center'>
                                <div className='col-12 float-start heading text-center'>
                                    <h3>Media</h3>
                                </div>
                                </div>  
                        </div>
                               <div className='col-lg-10 col-12 m-auto '>
                               <div className='row'>
                                    <div className='col-lg-3 col-12'>
                                        <div className='menubar'>
                                           <MediaNavigation />
                                        </div>
                                    </div>
                                    <div className='col-lg-9 col-12'>
                                        <div className='mediasection'>
                                              <Mediatabs />                                        
                                        </div>
                                </div>
                            </div>
                               </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}
export default page;