'use client';
const Partnaires = () => {
  return (
    <section className='mb-24 pb-24 xl:mb-32'>
      <div className=' relative font-inter antialiased'>
      <h2 className='section-title mb-12 text-center mx-auto'>  <span className=' font-caveat '>Nos</span> Partenaires</h2>
        <main className="relative  flex flex-col justify-center bg-primary overflow-hidden">
          <div className="w-full mx-auto py-20">
            <div className="text-center">
              <div
                x-data="{}"
                x-init="$nextTick(() => {
                  let ul = $refs.logos;
                  ul.insertAdjacentHTML('afterend', ul.outerHTML);
                  ul.nextSibling.setAttribute('aria-hidden', 'true');
                })"
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
              >
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  <li>
                    <img src='pictures/partenaires/1.png' alt="Vuo" width={128} height={128} />
                  </li>
                 
                 
                  <li>
                    <img src='pictures/partenaires/2.png' alt="Pixsys" width={180} height={180} />
                  </li>
                  <li>
                    <img src='pictures/partenaires/3.png' alt="Vuo" width={128} height={128} />
                  </li>
                 
                 
                  <li>
                    <img src='pictures/partenaires/4.png' alt="Pixsys" width={180} height={180} />
                  </li>
                  <li>
                    <img src='pictures/partenaires/5.png' alt="Vuo" width={128} height={128} />
                  </li>
                 
                 
                  <li>
                    <img src='pictures/partenaires/6.png' alt="Pixsys" width={180} height={180} />
                  </li>
                  <li>
                    <img src='pictures/partenaires/7.png' alt="Vuo" width={128} height={128} />
                  </li>
                 
                 
                  <li>
                    <img src='pictures/partenaires/8.png' alt="Pixsys" width={180} height={180} />
                  </li>
                  <li>
                    <img src='pictures/partenaires/1.png' alt="Vuo" width={128} height={128} />
                  </li>
                 
                 
                  <li>
                    <img src='pictures/partenaires/2.png' alt="Pixsys" width={180} height={180} />
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
