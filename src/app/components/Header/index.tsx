import Link from '../Link';
import headerNavLinks from '../../data/headerNavLinks';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label="Main page">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              {/* <Logo /> */}
              <Image width={240} height={60} src={Logo} alt="Logo icon" />
            </div>
            {/* {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )} */}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 sm:block dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton />
        <ThemeSwitch />
        <MobileNav /> */}
      </div>
    </header>
  );
};

export default Header;
