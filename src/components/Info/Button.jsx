import './Info.css';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to='/booking' className="book-now">book now</Link>
  )
}

export default Button