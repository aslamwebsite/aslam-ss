import React from 'react';
import { Parallax } from 'react-parallax';

export const AdvanceBanner = ( {bannerData} ) => {
  const sections = bannerData;
  // console.log(sections);
  return (
    <>
      {sections && sections.map((section, index) => (
        <Parallax key={index} bgImage={section.imageUrl} strength={500}>
          <div style={{ height: '800px' }}>
            <div className='projectcontent'>
              <h3>{section.content.title}</h3>
                <ul>
                  {section.content.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      <strong>{point.split(' ')[0]}</strong> {point.slice(point.split(' ')[0].length)}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </Parallax>
      ))}
    </>
  );
};
