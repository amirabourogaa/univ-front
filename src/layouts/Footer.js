'use client'
import React, { useState } from 'react'
import '../styles/footer.css'

function Footer () {
  const [primaryColor, setPrimaryColor] = useState('#22c55e')

  return (
    <footer className="dark:bg-gray-900 z-0 py-10 bg-primary relative">
    {/* Waves Animation */}
    <div className="waves">
      <div
        className={`wave ${
          primaryColor === "#B8D947" ? "primaryImage" : "secondaryImage"
        }`}
        id="wave1"
      ></div>
      <div
        className={`wave ${
          primaryColor === "#B8D947" ? "primaryImage" : "secondaryImage"
        }`}
        id="wave2"
      ></div>
      <div
        className={`wave ${
          primaryColor === "#B8D947" ? "primaryImage" : "secondaryImage"
        }`}
        id="wave3"
      ></div>
    </div>
  
    {/* Content Container */}
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white font-caveat drop-shadow-lg">
          Partie newsletter & contact
        </h2>
      </div>
  
      {/* Newsletter Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Actualités */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Nos actualités & Nouvelles
          </h3>
          <p
            className="text-gray-100"
            style={{ fontFamily: "Segoe UI Emoji" }}
          >
            Abonnez-vous à notre newsletter pour découvrir en avant-première nos
            gammes de produits, nos promotions spéciales, et les actualités qui
            vous intéressent. Recevez directement dans votre boîte mail des idées
            inspirantes, des astuces utiles, et bien plus encore. Inscrivez-vous
            dès aujourd'hui et ne manquez plus aucune information essentielle !
          </p>
        </div>
  
        {/* Right Column: Formulaire */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Abonnez-vous à notre newsletter
          </h3>
          <form className="flex space-x-4 items-center">
            {/* Champ Nom */}
            <div className="flex-1">
              <label htmlFor="UserName" className="sr-only">
                Nom
              </label>
              <input
                type="text"
                id="UserName"
                placeholder="Votre nom"
                className="w-full p-4 text-sm rounded-md bg-gray-200 focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Champ Email */}
            <div className="flex-1">
              <label htmlFor="UserEmail" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="UserEmail"
                placeholder="Votre email"
                className="w-full p-4 text-sm rounded-md bg-gray-200 focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Bouton Soumettre */}
            <div>
              <button
                type="submit"
                className="bg-white text-primary font-bold py-3 px-6 rounded-md transition hover:bg-gray-300"
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>
      </div>
  
      {/* Contact Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-white mb-8">Nos contacts</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-100">
  <div className="flex items-center space-x-4">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-1.586a2 2 0 00-.586-1.414l-3.414-3.414a2 2 0 00-1.414-.586H7a2 2 0 00-1.414.586L2.172 17H7"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8h5a2 2 0 012 2v7a2 2 0 01-2 2h-5M7 8H2a2 2 0 00-2 2v7a2 2 0 002 2h5M2 3h20a2 2 0 012 2v3a2 2 0 01-2 2H2a2 2 0 01-2-2V5a2 2 0 012-2z"
        />
      </svg>
    </span>
    <span>06, 2013 Rue Ali Belhouane، Ben Arous</span>
  </div>
  <div className="flex items-center space-x-4">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5 8.5v5h2l2 3.5H16m2-4.5V14M10 4.5h4.5m2 2.5v5H16"
        />
      </svg>
    </span>
    <span>+216 71380667 / +216 71 381 112</span>
  </div>
  <div className="flex items-center space-x-4">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h8m-4 8v-8M9.6 7.4a3 3 0 014.8 0l.6.6h-6l.6-.6z"
        />
      </svg>
    </span>
    <span>univers.automatisme@gnet.com</span>
  </div>
</div>
  </div>
    </div>
  </footer>
  
  )
}

export default Footer
