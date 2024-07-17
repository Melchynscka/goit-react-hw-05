
import css from './Loader.module.css';
import { RingLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className={css.loadWrapper}>
      <RingLoader color="pink"/>
      <p>Laoding...</p>
    </div>
  );
}