import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Link } from 'react-scroll';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Deliveredprojects = ({ categoryToShow }) => {
  const containerRef = useRef(null);
  const projectSliders = useRef([]);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        const imageArray = Array.from(containerRef.current.children);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%', // Adjusted start value
            end: 'bottom 75%', // Adjusted end value
            scrub: true,
          },
        });

        tl.fromTo(
          imageArray,
          {
            x: '+=100',
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power2.out',
          }
        );

        const handleMouseEnter = (index) => {
          gsap.to(containerRef.current.children[index], {
            scale: 1.2,
            zIndex: 1,
            duration: 0.5,
            ease: 'power3.inOut',
          });
        };

        const handleMouseLeave = (index) => {
          gsap.to(containerRef.current.children[index], {
            scale: 1,
            zIndex: 0,
            duration: 0.5,
            ease: 'power3.inOut',
          });
        };

        const handleMouseMove = (event, index) => {
          const { clientX, clientY } = event;
          const { left, top, width, height } = containerRef.current.children[index].getBoundingClientRect();

          const xPercent = (clientX - left) / width;
          const yPercent = (clientY - top) / height;

          gsap.to(containerRef.current.children[index], {
            x: (xPercent - 0.5) * 50,
            y: (yPercent - 0.5) * 50,
            duration: 0.5,
            ease: 'power2.out',
          });
        };

        imageArray.forEach((child, index) => {
          child.addEventListener('mouseenter', () => handleMouseEnter(index));
          child.addEventListener('mouseleave', () => handleMouseLeave(index));
          child.addEventListener('mousemove', (event) => handleMouseMove(event, index));
        });

        return () => {
          imageArray.forEach((child, index) => {
            child.removeEventListener('mouseenter', () => handleMouseEnter(index));
            child.removeEventListener('mouseleave', () => handleMouseLeave(index));
            child.removeEventListener('mousemove', (event) => handleMouseMove(event, index));
          });
        };
      },
    });
  }, []);

  return (
    <section className='deliveredimage'>
      <div className='container'>
        <div className='col-12 float-start title text-center'>
          <h3>Delivered Projects</h3>
        </div>
          <div id="image-container" className="image-container flex-center flex-wrap float-start" ref={containerRef}>
            {Object.keys(categoryToShow.DeliveredProjects).map((pd1, index) => (
              <div key={index} className='image-item'>
                  <div className={`projectslider`} ref={(el) => projectSliders.current.push(el)}>
                    <figure className='snip0016'>
                      {categoryToShow.DeliveredProjects[index].imageSrc ? (
                        <Image src={categoryToShow.DeliveredProjects[index].imageSrc} width='680' height='680' alt='' />
                      ) : null}
                      <figcaption>
                        <h4>{categoryToShow.DeliveredProjects[index].ProjectName}</h4>
                        <p>{categoryToShow.DeliveredProjects[index].location}</p>
                      </figcaption>
                    </figure>
                  </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Deliveredprojects;
