'use client';
const Partnaires = () => {
  return (
    <section className='mb-24 bg-white pb-24 xl:mb-32'>
      <div className=' relative font-inter'>
        <h2 className='section-title mb-12 text-center bg-white mx-auto'>
          <span className='font-caveat'>Nos</span> Partenaires
        </h2>
        <main className="relative flex flex-col justify-center bg-white overflow-hidden">
          <div className="w-full mx-auto py-20">
            <div className="text-center">
              <div
                x-data="{}"
                x-init="$nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
                className="w-full inline-flex flex-nowrap overflow-hidden"
              >
                <ul
                  x-ref="logos"
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                  style={{ whiteSpace: 'nowrap' }} // Assurez-vous que les images sont bien alignées horizontalement sans rupture de ligne
                >
                  <li>
                    <img src='partenaires/1.png' alt="SMC" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/2.png' alt="Pemarks" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/3.png' alt="Aignep" width={180} height={180} />
                  </li>
                  <li>
                    <img src='partenaires/4.png' alt="Pixsys" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/5.png' alt="Burkert" width={180} height={180} />
                  </li>
                  <li>
                    <img src='partenaires/6.png' alt="Crouzet" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/7.png' alt="Novacom" width={180} height={180} />
                  </li>
                  <li>
                    <img src='partenaires/8.png' alt="Vuototecnica" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/9.png' alt="Mebra" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/10.png' alt="Aidro" width={180} height={180} />
                  </li>
                </ul>
                <ul
                  x-ref="logos"
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                  style={{ whiteSpace: 'nowrap' }} // Assurez-vous que les images sont bien alignées horizontalement sans rupture de ligne
                >
                  <li>
                    <img src='partenaires/1.png' alt="SMC" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/2.png' alt="Pemarks" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/3.png' alt="Aignep" width={180} height={180} />
                  </li>
                  <li>
                    <img src='partenaires/4.png' alt="Pixsys" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/5.png' alt="Burkert" width={180} height={180} />
                  </li>
                  <li>
                    <img src='partenaires/6.png' alt="Crouzet" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/7.png' alt="Novacom" width={180} height={180} />
                  </li>
                  <li>
                    <img src='partenaires/8.png' alt="Vuototecnica" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/9.png' alt="Mebra" width={168} height={168} />
                  </li>
                  <li>
                    <img src='partenaires/10.png' alt="Aidro" width={180} height={180} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Partnaires;
