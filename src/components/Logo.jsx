import Link from 'next/link';
import Image from 'next/image';
// import logoUni from '/images/logounivers.png';
const Logo = () => {
  return (
    <Link href='/'>
      <img src='/images/logounivers.png' width={80} height={80} priority alt='logo univers' />
    </Link>
  );
};

export default Logo;
