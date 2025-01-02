'use client';
import React, { useState } from 'react';

function Footer() {
  const [primaryColor, setPrimaryColor] = useState('#22c55e'); // Couleur par défaut

  return (
    <footer id="footer" className="dark:bg-gray-900 bg-primary relative z-0 py-10">
      {/* Animation des vagues */}
      <div className="waves">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`wave ${
              primaryColor === '#B8D947' ? 'primaryImage' : 'secondaryImage'
            }`}
            id={`wave${i}`}
          ></div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne gauche : Actualités */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Nos actualités & Nouvelles
            </h3>
            <p
              className="text-gray-100 leading-relaxed"
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

          {/* Colonne centrale : Contact */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Contactez-nous
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
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
                    d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6z"
                  />
                  <circle cx="12" cy="8" r="2" />
                </svg>
                <span className="text-white">
                  06, 2013 Rue Ali Belhouane, Ben Arous
                </span>
              </li>
              <li className="flex items-center space-x-4">
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
                <span className="text-white">
                  +216 71 380 667 / +216 71 381 112
                </span>
              </li>
              <li className="flex items-center space-x-4">
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
                    d="M3 8l9 6 9-6v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l9-6 9 6"
                  />
                </svg>
                <span className="text-white">
                  univers.automatisme@gnet.com
                </span>
              </li>
            </ul>
          </div>

          {/* Colonne droite : Carte */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Localisation
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.558560004932!2d10.2194184!3d36.757165699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd366398e4edc9%3A0x71f254d6ae223f5f!2sUNIVERS%20AUTOMATISME!5e0!3m2!1sfr!2stn!4v1734690213573!5m2!1sfr!2stn"
              width="100%"
              height="200"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Formulaire d'abonnement */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8">
            Abonnez-vous à notre newsletter
          </h3>
          <form className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="flex-1 p-4 text-sm rounded-md bg-gray-200 focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 p-4 text-sm rounded-md bg-gray-200 focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-white text-primary font-bold py-3 px-6 rounded-md transition hover:bg-gray-300"
            >
              Soumettre
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
