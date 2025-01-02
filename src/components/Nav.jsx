// link (next js)
import Link from 'next/link';

// next hooks
import { usePathname } from 'next/navigation';

// framer motion
import { motion } from 'framer-motion';

const links = [
  { path: '/', name: 'Accueil' },
  { path: '/products', name: 'Nos produits' },
  { path: '#footer', name: 'Contact' },
  // { path: '#footer', name: 'Pied de page' }, // Lien vers le footer
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, closeSheet }) => {
  const path = usePathname();

  const handleScroll = (event, linkPath) => {
    if (linkPath.startsWith('#')) {
      event.preventDefault(); // Empêche la navigation normale
      const targetId = linkPath.substring(1); // Supprime le #
      const targetElement = document.getElementById(targetId); // Récupère l'élément

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Animation fluide
          block: 'start', // Position en haut de la vue
        });
      }
      if (closeSheet) closeSheet(); // Ferme le menu si nécessaire
    }
  };

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={` ${linkStyles}`}
            onClick={(event) => handleScroll(event, link.path)}
          >
            {link.path === path && !link.path.startsWith('#') && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
