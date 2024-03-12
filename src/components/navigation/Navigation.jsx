import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";

import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectPage } from '../../redux/reducers/showPagesSlice'

import './Navigation.scss';

const Navigation = () => {

  const pageName = useSelector(selectPage);

  return (
    <div className="Navigation">
      {
        pageName !== 'game' && pageName !== 'login' &&
        <Link to={'/'} className="back-btn"><SlArrowLeft /></Link>
      }
      {
          pageName === 'registration' && 
          <div className="nav-back">
            <Link to={'/login'} className="back-btn"><SlArrowLeft /></Link>
          </div> 
      }
      {
        pageName === 'guest' &&
        <div className="nav-back">
          <Link to={'/login'} className="back-btn"><SlArrowLeft /></Link>
        </div> 
      }
      {
        pageName !== 'login' && pageName !== 'registration' && pageName !== 'guest' &&
        <nav>
          <ul>
            {
              pageName !== 'send_word' ? <Link className="send-word" to={'/send_word'}>+</Link> : ''
            }
            {/* <Link to={'/notifications'}><IoMdNotificationsOutline /></Link>
            <Link to={'/search'}><IoIosSearch /></Link>
            <Link to={'/settings'}><IoSettingsOutline /></Link> */}
          </ul>
        </nav>
      }

    </div>
  );

}
export default Navigation;