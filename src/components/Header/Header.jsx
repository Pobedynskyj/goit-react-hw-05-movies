import { Link, Outlet } from 'react-router-dom';
import s from './Header.module.css';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.nav}>
        {navItems.map(({ href, text }) => (
          <Link to={href} key={href} className={s.mainbtn}>
            {text}
          </Link>
        ))}
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
