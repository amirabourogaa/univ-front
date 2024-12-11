import Link from 'next/link';
// import logoUni from '/images/logounivers.png';
const Logo = () => {
  return (
    <Link href='/'>
      <img src='/images/logo.png' width={160} height={120} priority alt='logo univers' />
    </Link>
  );
};

export default Logo;
