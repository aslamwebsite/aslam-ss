'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ScrollDown from '@/components/ScrollDown';
import projectData from '@/json/project.json';  
import Accordian from '@/components/Accordian';
import Category from '@/components/Category';


export const Page = () => {
    const smoothRef = useRef(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [text, setText] = useState('');
    const fullText = 'HOMES BY SS GROUP';

    useEffect(() => {
        const zoomTimeout = setTimeout(() => {
            setIsZoomed(true);
        }, 0);

        const unzoomTimeout = setTimeout(() => {
            setIsZoomed(false);
        }, 3000);

        const textTimeout = setTimeout(() => {
            displayText();
        }, 1000);

        return () => {
            clearTimeout(zoomTimeout);
            clearTimeout(unzoomTimeout);
            clearTimeout(textTimeout);
        };
    }, []);

    const displayText = () => {
        let currentIndex = 0;
        const textInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setText(fullText.substring(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(textInterval);
            }
        }, 100);
    };

    const sectionRef = useRef();

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setInView(true);
            }
        });
    };

    const categoryToShow = 'HOMES';

    return (
        <>
            <Header />
            <main className="d-flex flex-wrap float-start col-12">
                <section className='overflow-hidden '>
                    <div className={`bannerimage position-relative ${isZoomed ? 'zoom-in' : 'zoom-out'}`}>
                        <Image src='/homes.webp' width='1920' height='980' alt='homes category banner' />
                        <div className='bannerimagecont position-absolute top-50 text-center col-12 float-start'>
                            <h2>{text}</h2>
                        </div>
                    </div>
                    <ScrollDown targetRef={smoothRef} />
                </section>
                <Category categoryToShow={categoryToShow} projectData={projectData} /> 
                <Accordian />
            </main>
            <Footer />
        </>
    );
};

export default Page;
