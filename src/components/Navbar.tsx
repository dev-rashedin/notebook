import { ThemeSwitcher } from './theme/theme-switcher';
import NavLink from './ui/Navlinks';
import MobileMenu from './ui/MobileMenu';
import Logo from './ui/ServestLogo';
import HeaderFrame from './ui/HeaderFrame';

const Navbar = ({ type = 'home' }: { type: string }) => {
  return (
    <HeaderFrame type={type}>
      <nav className="boundary flex-between">
        <Logo type={type} />
        <section className="flex-center ">
          <NavLink />
          <MobileMenu />
          <div className={`hidden md:block ${type === 'sidebar' ? 'xl:mr-20' : ''}`}>
            {/* <Socials /> */}
            <ThemeSwitcher />
          </div>
        </section>
      </nav>
    </HeaderFrame>
  );
};

export default Navbar;
