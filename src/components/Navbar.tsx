import { ThemeSwitcher } from './theme/theme-switcher';
import NavLink from './ui/Navlinks';
import MobileMenu from './ui/MobileMenu';
import Logo from './ui/logo';
import HeaderFrame from "./ui/header-frame";

const Navbar = ({ type = 'home' }: { type: string }) => {

  return (
      <HeaderFrame>
        <nav className="boundary flex-between">
        <Logo type={type} />
        <section className='hidden md:block p-3'>
      </section>
        <section className="flex-center">
          <NavLink />
          <MobileMenu />
          <div className={`hidden md:block ${type === 'sidebar' ? 'xl:mr-20' : ''}`}>
            <ThemeSwitcher />
          </div>
        </section>
      </nav>
      </HeaderFrame>
  );
};

export default Navbar;
