import Link from '../Link';
import headerNavLinks from '../../data/headerNavLinks';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
const Header = () => {
  return (
    <header className="bg-gray-900 p-24 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <Link href="/" aria-label="Main page">
            <div className="flex items-center justify-between">
              <div className="mr-3 w-[240px]">
                <Image src={Logo} alt="Logo icon" priority={true} />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group relative text-base font-medium text-white sm:block"
            >
              <span>{link.title}</span>
              <span className="absolute bottom-0 left-0 h-px w-full translate-y-2 transform bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100"></span>
            </Link>
          ))}
        </div>
        <div className="">
          <Link href="/cart" aria-label="Cart">
            <ShoppingBasketOutlinedIcon sx={{ color: 'white', fontSize: 40 }} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
