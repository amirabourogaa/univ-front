import Link from 'next/link';
// import logoUni from '/images/logounivers.png';
const Logo = () => {
  return (
    <Link href='/'>
      <img src='/images/logo.png' width={120} height={100} priority alt='logo univers' />
    </Link>
  );
};

export default Logo;
