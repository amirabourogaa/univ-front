"use client";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
// import SilderIcon01 from '/ps-icon-01.svg';
// import SilderIcon02 from '../../../public/ps-icon-02.svg';
// import SilderIcon03 from '../../../public/ps-icon-03.svg';
// import SilderIcon04 from '../../../public/ps-icon-04.svg';
import Banner from '@/components/banner.jsx';

export const metadata = {
  title: "Slider with Progress Indicator - Cruip Tutorials",
  description: "Page description",
};

export default function ProgressSlider() {
  const items = [
    {
      img: [
        "/categories/pneumatique/1.png",
        "/categories/pneumatique/2.png",
        "/categories/pneumatique/3.png",
        "/categories/pneumatique/4.png",
        "/categories/pneumatique/5.png",
        "/categories/pneumatique/6.png",
        "/categories/pneumatique/7.png",
        "/categories/pneumatique/8.png",
       
      ],
      desc: "Pneumatique",
      buttonIcon: '/ps-icon-01.svg',
    },
    {
      img: [
        "/categories/automatisme/1.png",
        "/categories/automatisme/2.png",
        "/categories/automatisme/3.png",
        "/categories/automatisme/4.png",
        "/categories/automatisme/5.png",
        "/categories/automatisme/6.png",
        "/categories/automatisme/7.png",
        "/categories/automatisme/8.png",
       
      ],
      desc: "Automatisme",
      buttonIcon: '/ps-icon-02.svg',
    },
    {
      img: [
        "/categories/instrumentation/1.png",
        "/categories/instrumentation/2.png",
        "/categories/instrumentation/3.png",
        "/categories/instrumentation/4.png",
        "/categories/instrumentation/5.png",
        "/categories/instrumentation/6.png",
        "/categories/instrumentation/7.png",
        "/categories/instrumentation/8.png",
       
       
      ],
      desc: "Instrumentation & Regulation",
      buttonIcon: '/ps-icon-03.svg',
    },
    {
      img: [
        "/categories/controle-de-fluide/1.png",
        "/categories/controle-de-fluide/2.png",
        "/categories/controle-de-fluide/3.png",
        "/categories/controle-de-fluide/4.png",
        "/categories/controle-de-fluide/5.png",
        "/categories/controle-de-fluide/6.png",
        "/categories/controle-de-fluide/7.png",
        "/categories/controle-de-fluide/8.png",
        
      ],
      desc: "contrôle de fluide",
      buttonIcon: '/ps-icon-04.svg',
    },
    {
      img: [
        "/categories/hydraulique/1.png",
        "/categories/hydraulique/2.png",
        "/categories/hydraulique/3.png",
        "/categories/hydraulique/4.png",
        "/categories/hydraulique/5.png",
        "/categories/hydraulique/6.png",
        "/categories/hydraulique/7.png",
        "/categories/hydraulique/8.png",
       
      ],
      desc: "Hydraulique",
      buttonIcon: '/ps-icon-04.svg',
    },
    {
      img: [
        "/categories/technique-de-vide/1.png",
        "/categories/technique-de-vide/2.png",
        "/categories/technique-de-vide/3.png",
        "/categories/technique-de-vide/4.png",
        "/categories/technique-de-vide/5.png",
        "/categories/technique-de-vide/6.png",
        "/categories/technique-de-vide/7.png",
        "/categories/technique-de-vide/8.png",
       
      ],
      desc: "Technique de vide",
      buttonIcon: '/ps-icon-04.svg',
    },
  ];

  const duration = 5000; // Duration in milliseconds
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    resetInterval();

    timeoutRef.current = setTimeout(() => {
      setActive((prevActive) => (prevActive + 1) % items.length);
    }, duration);

    setProgress(0);
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 100 / (duration / 100)));
    }, 100);

    return () => {
      resetTimeout();
      resetInterval();
    };
  }, [active, items.length]);

  const handleClick = (index) => {
    resetTimeout();
    resetInterval();
    setActive(index);
    setProgress(0);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,

    });
    AOS.refresh();
  }, []);
  return (
    <section
    className=" w-full relative flex flex-col justify-center bg-white overflow-hidden"
    data-aos="fade-left"
  >
    <h2 className="section-title mt-12 mb-12 2xl:my-12 text-center mx-auto">
      Gamme <span className="font-caveat">de produits</span>
    </h2>
    <div className="w-full mx-auto px-4 md:px-6 pb-24">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl mx-auto text-center">
          {/* Boutons de navigation */}
          <div className="max-w-xl sm:max-w-xl md:max-w-full mx-auto grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {items.map((item, index) => (
              <button
                key={index}
                className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
                onClick={() => handleClick(index)}
              >
                <span
                  className={`text-center flex flex-col items-center ${
                    active === index
                      ? ''
                      : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'
                  }`}
                >
                  <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                    <img src={item.buttonIcon} alt={item.desc} />
                  </span>
                  <span className="block text-l font-medium text-slate-900 mb-2">
                    {item.desc}
                  </span>
                  <span
                    className="block relative w-full bg-slate-400 h-1 rounded-full"
                    role="progressbar"
                    aria-valuenow={active === index ? progress : 0}
                  >
                    <span
                      className="absolute inset-0 bg-secondGreen-500 rounded-[inherit]"
                      style={{ width: active === index ? `${progress}%` : '0%' }}
                    ></span>
                  </span>
                </span>
              </button>
            ))}
          </div>
          {/* Contenu affiché pour chaque élément actif */}
          <div className="relative flex flex-col">
            {items.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 ${
                  active === index ? 'block' : 'hidden'
                }`}
              >
                {item.img.map((img, i) => (
                  <div key={i}>
                    <img
                     
                      height={900}
                      width={900}
                      src={img}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Banner
      tutorialUrl="https://cruip.com/create-a-carousel-with-progress-indicators-using-tailwind-and-nextjs/"
      downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/progress-slider.tsx"
    />
  </section>
  
  );
}
