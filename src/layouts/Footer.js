'use client'
import React, { useState } from 'react';
import '../styles/footer.css';

function Footer() {
  const [primaryColor, setPrimaryColor] = useState('#22c55e');

  return (
    <footer className='dark:bg-gray-900 z-0 py-10 bg-primary relative'>
      {/* Waves Animation */}
      <div className='waves'>
        <div
          className={`wave ${primaryColor === '#B8D947' ? 'primaryImage' : 'secondaryImage'}`}
          id='wave1'
        ></div>
        <div
          className={`wave ${primaryColor === '#B8D947' ? 'primaryImage' : 'secondaryImage'}`}
          id='wave2'
        ></div>
        <div
          className={`wave ${primaryColor === '#B8D947' ? 'primaryImage' : 'secondaryImage'}`}
          id='wave3'
        ></div>
      </div>

      {/* Content Container */}
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        {/* Section Title */}
        {/* <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white font-caveat drop-shadow-lg'>
            Nous contacter
          </h2>
        </div> */}

        {/* First Row: Nos actualités & Nouvelles + Contactez-nous */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Column: Actualités */}
          <div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Nos actualités & Nouvelles
            </h3>
            <p
              className='text-gray-100'
              style={{ fontFamily: 'Segoe UI Emoji' }}
            >
              Abonnez-vous à notre newsletter pour découvrir en avant-première
              nos gammes de produits, nos promotions spéciales, et les
              actualités qui vous intéressent. Recevez directement dans votre
              boîte mail des idées inspirantes, des astuces utiles, et bien plus
              encore. Inscrivez-vous dès aujourd'hui et ne manquez plus aucune
              information essentielle !
            </p>
          </div>

          {/* Right Column: Contactez-nous (Adresse, Téléphone, Email) */}
          <div>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Contactez-nous
            </h3>
            {/* Adresse */}
            <div className='flex items-center space-x-4 mb-4'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  className='w-6 h-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z'
                  />
                  <circle cx='12' cy='8' r='2' />
                </svg>
              </span>
              <span className='text-white'>06, 2013 Rue Ali Belhouane, Ben Arous</span>
            </div>

            {/* Téléphone */}
            <div className='flex items-center space-x-4 mb-4'>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.5a1 1 0 011 1v3.5a1 1 0 01-1 1H7.868a1 1 0 00-.737.326l-1.733 1.733a15.072 15.072 0 006.586 6.586l1.733-1.733a1 1 0 00.326-.737V16a1 1 0 011-1H18a1 1 0 011 1V19a2 2 0 01-2 2h-1c-7.18 0-13-5.82-13-13V5z"
                  />
                </svg>
              </span>
              <span className='text-white'>+216 71 380 667 / +216 71 381 112</span>
            </div>

            {/* Email */}
            <div className='flex items-center space-x-4'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  className='w-6 h-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 8l9 6 9-6v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 8l9-6 9 6'
                  />
                </svg>
              </span>
              <span className='text-white'>univers.automatisme@gnet.com</span>
            </div>
          </div>
        </div>

        {/* Second Row: Newsletter Form */}
        <div className='mt-16'>
          <h3 className='text-3xl font-bold text-white mb-8'>
            Abonnez-vous à notre newsletter
          </h3>
          <form className='flex space-x-4 items-center'>
            {/* Champ Nom */}
            <div className='flex-1'>
              <label htmlFor='UserName' className='sr-only'>
                Nom
              </label>
              <input
                type='text'
                id='UserName'
                placeholder='Votre nom'
                className='w-full p-4 text-sm rounded-md bg-gray-200 focus:ring-2 focus:ring-primary'
              />
            </div>
            {/* Champ Email */}
            <div className='flex-1'>
              <label htmlFor='UserEmail' className='sr-only'>
                Email
              </label>
              <input
                type='email'
                id='UserEmail'
                placeholder='Votre email'
                className='w-full p-4 text-sm rounded-md bg-gray-200 focus:ring-2 focus:ring-primary'
              />
            </div>
            {/* Bouton Soumettre */}
            <div>
              <button
                type='submit'
                className='bg-white text-primary font-bold py-3 px-6 rounded-md transition hover:bg-gray-300'
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
