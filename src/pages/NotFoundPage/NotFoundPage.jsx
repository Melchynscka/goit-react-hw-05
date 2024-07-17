import { NavLink } from 'react-router-dom';
import css from './NotFoundPage.module.css'
export default function NotFoundPage () {
  return (
    <div className={css.notFound}>
      Oops! Something went wrong!
      <div>
        <NavLink className={css.backHome} to="/">Back to home</NavLink>
      </div>
    </div>
  );
}