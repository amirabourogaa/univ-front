'use client';
import { ShoppingCart, Wrench, MessageCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <ShoppingCart size={72} strokeWidth={0.8} />,
    title: 'Vente & Distribution',
    description:
      'Univers Automatisme met à votre service une gamme de produits de marques variées.',
  },
  {
    icon: <Wrench size={72} strokeWidth={0.8} />,
    title: 'Maintenance & SAV',
    description:
      'Réparation de systèmes pneumatiques et hydrauliques avec un accompagnement dédié pour des équipements exigeant une expertise technique avancée.',
  },
  {
    icon: <MessageCircle size={72} strokeWidth={0.8} />,
    title: 'Conseil & Etude',
    description:
      'Nous offrons des conseils techniques, optimisons les procédés, réalisons des dimensionnements sur mesure et sélectionnons les composants les mieux adaptés pour chaque solution.',
  }
  
];
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {
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
    <section className='mb-12 xl:mb-36   ' data-aos="fade-right" >
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
         <span className=' font-caveat '>Nos</span>  Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3   justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
