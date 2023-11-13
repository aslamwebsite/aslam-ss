import React from 'react'

import {
    TransformWrapper,
    TransformComponent,
    useControls
  } from "react-zoom-pan-pinch";
import { Restore, ZoomIn, ZoomOut } from '@mui/icons-material';

export const LocationMap = ( {locationData} ) => {
    const Controls = () => {
        const { zoomIn, zoomOut, resetTransform } = useControls();
        return (
          <>
          {locationData ?
           <div className='locationmapcta position-absolute top-o end-o col-12 float-start d-flex justify-content-end p-2'>
           <button onClick={() => zoomIn()}><ZoomIn /></button>
            <button onClick={() => zoomOut()}><ZoomOut /></button>
            <button onClick={() => resetTransform()}><Restore /></button>
           </div>
           : null}
          </>
        );
      };
  return (
   <>
   {locationData && locationData.map(locationD => (
  <section>
        <div className='locationmap'>
      <div className='container'>
        <div className='col-lg-10 m-auto col-12'>
          <div className='row'>
            <div className="col-lg-9 col-12">
              <div className='locationimage position-relative'>
              <TransformWrapper>
      <Controls />
      <TransformComponent>
        <img
          src={locationD.locationImage}
          alt="Location Map"
          width="100%"
        />
      </TransformComponent>
    </TransformWrapper>
              </div>
            </div>
            <div className='col-lg-3 col-12'>
              <div className='locationcont'>
                <div className='locationheading'>
                  <h4>{locationD.locationTitle}</h4>
                </div>
                {Object.keys(locationD.locationInfo).map((category, categoryIndex) => (
                  <div className='locationinfo' key={categoryIndex}>
                    <ul>
                      <li>
                        <strong>{category}</strong>
                        {locationD.locationInfo[category].map((item, itemIndex) => (
                          <span key={itemIndex}>{item}</span>
                        ))}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>
))}
   </>
  )
}
