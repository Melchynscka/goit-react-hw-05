import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const setLinkClass = ({ isActive }) => {
  return clsx(css.linkItem, isActive && css.linkActive);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={setLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={setLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
}