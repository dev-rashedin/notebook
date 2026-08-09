import { ThemeSwitcher } from './theme/theme-switcher';
import NavLink from './ui/Navlinks';
import MobileMenu from './ui/MobileMenu';
import Logo from './ui/Logo';

const Navbar = ({ type = 'home' }: { type: string }) => {

  return (
      <header
      className={`h-20 pt-2 flex border-b  items-center lg:sticky lg:top-0 z-50  ${type === "home" ? "bg-navbar border-c-docs sticky top-0" : type === "logo" ? "mr-12 bg-sidebar border-c-logo" : " justify-end bg-docs border-c-docs"}`}
    >
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
      </header>
  );
};

export default Navbar;
