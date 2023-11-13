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
                            <h3>JOIN HANDS WITH SS GROUP</h3>
                            </div>
                    </div>
                    <div className='col-12 float-start text-center mb-5'>
                        <p>Get ready for a life of growth and prosperity with one of the largest real estate developers in Gurugram. Become a SS Group authorized channel partner and delight your customers with a wide range of residential and commercial properties to choose from across Gurugram.</p>
                        <p>For Channel Partner queries, email us at <a href='mailto:sales@ssgroup-india.com'>sales@ssgroup-india.com</a></p>
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