"use client"
import React, { useState, useEffect, useRef } from 'react';
import 'odometer/themes/odometer-theme-default.css'; // Import odometer CSS
import Odometer from 'odometer'; // Import the "odometer" library

const Counter = ({ startValue, endValue, speed }) => {
  const [counted, setCounted] = useState(false);
  const counterRef = useRef(null);
  let odometer;

  useEffect(() => {
    if (window.innerWidth > 768 && counterRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCounted(true);
            }
          });
        },
        { rootMargin: '0px 0px -100px 0px' }
      );

      observer.observe(counterRef.current);
    } else {
      setCounted(true);
    }
  }, []);

  useEffect(() => {
    if (counted) {
      odometer = new Odometer({
        el: counterRef.current,
        value: startValue,
        format: '(,ddd)',
        duration: speed,
      });

      odometer.update(endValue);
    }
  }, [counted, startValue, endValue, speed]);

  return (
    <div className="counter-element mb-5 pb-5">
      <div className="odometer" ref={counterRef}>
        {counted ? startValue : 0}
      </div>
    </div>
  );
};

export default Counter;
