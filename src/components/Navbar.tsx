import { ThemeSwitcher } from './theme/theme-switcher';
import NavLink from './ui/Navlinks';
import MobileMenu from './ui/MobileMenu';
import Logo from './ui/Logo';
import HeaderFrame from './ui/HeaderFrame';

const Navbar = ({ type = 'home' }: { type: string }) => {

  return (
    <HeaderFrame type={type}>
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
