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
        "/pictures/pneumatique/1.jpeg",
        "/pictures/pneumatique/2.jpg",
        "/pictures/pneumatique/3.jpg",
        "/pictures/pneumatique/4.jpg",
        "/pictures/pneumatique/5.jpg",
        "/pictures/pneumatique/6.jpg",
        "/pictures/pneumatique/7.jpg",
        "/pictures/pneumatique/8.jpg",
       
      ],
      desc: "Pneumatique",
      buttonIcon: '/ps-icon-01.svg',
    },
    {
      img: [
        "/pictures/automatisme/1.jpg",
        "/pictures/automatisme/2.jpeg",
        "/pictures/automatisme/3.jpg",
        "/pictures/automatisme/4.webp",
        "/pictures/automatisme/5.webp",
        "/pictures/automatisme/6.png",
        "/pictures/automatisme/7.jpeg",
        "/pictures/automatisme/8.jpg",
       
      ],
      desc: "Automatisme",
      buttonIcon: '/ps-icon-02.svg',
    },
    {
      img: [
        "/pictures/instrumentation/1.jpg",
        "/pictures/instrumentation/2.jpg",
        "/pictures/instrumentation/3.png",
        "/pictures/instrumentation/4.jpg",
        "/pictures/instrumentation/5.jpg",
        "/pictures/instrumentation/7.jpg",
        "/pictures/instrumentation/8.webp",
       
       
      ],
      desc: "Instrumentation & Regulation",
      buttonIcon: '/ps-icon-03.svg',
    },
    {
      img: [
        "/pictures/controle-de-fluide/1.jpg",
        "/pictures/controle-de-fluide/2.jpg",
        "/pictures/controle-de-fluide/3.jpg",
        "/pictures/controle-de-fluide/4.jpg",
        "/pictures/controle-de-fluide/5.jpg",
        "/pictures/controle-de-fluide/6.jpg",
        "/pictures/controle-de-fluide/7.jpg",
        
      ],
      desc: "contrôle de fluide",
      buttonIcon: '/ps-icon-04.svg',
    },
    {
      img: [
        "/pictures/technique-de-vide/1.webp",
        "/pictures/technique-de-vide/2.jpg",
        "/pictures/technique-de-vide/3.jpg",
        "/pictures/technique-de-vide/4.jpg",
        "/pictures/technique-de-vide/5.jpg",
        "/pictures/technique-de-vide/6.jpg",
        "/pictures/technique-de-vide/7.jpg",
        "/pictures/technique-de-vide/11.jpg",
     
      ],
      desc: "Technique de vide",
      buttonIcon: '/ps-icon-04.svg',
    },
    {
      img: [
        "/pictures/hydraulique/A.jpg",
        "/pictures/hydraulique/B.webp",
        "/pictures/hydraulique/C.jpg",
        "/pictures/hydraulique/D.jpg",
        "/pictures/hydraulique/DD.jpg",
        "/pictures/hydraulique/E.jpg",
        "/pictures/hydraulique/F.png",
       
      ],
      desc: "Hydraulique",
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
    className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden"
    data-aos="fade-left"
  >
    <h2 className="section-title mt-12 mb-12 xl:my-12 text-center mx-auto">
      Gamme <span className="font-caveat">de produits</span>
    </h2>
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pb-24">
      <div className="flex justify-center">
        <div className="w-full max-w-5xl mx-auto text-center">
          {/* Boutons de navigation */}
          <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
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
                  <span className="block text-sm font-medium text-slate-900 mb-2">
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
                      className="h-auto w-full rounded-lg"
                      height={400}
                      width={400}
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
