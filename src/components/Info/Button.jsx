import styles from './Info.module.css';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to='/booking' className={styles.bookNow}>book now</Link>
  )
}

export default Button