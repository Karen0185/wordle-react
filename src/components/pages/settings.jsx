import { useDispatch } from "react-redux";
import { changePageName } from '../../redux/reducers/showPagesSlice'
import { useEffect } from "react";
import Button from '../UI/Button'
import '../UI/ui.scss'
import { Link } from "react-router-dom";

const Settings = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePageName('settings'))
       },[])

    return (
        <div className="Settings page">
            <h1>Настройки</h1>
            <div className="page-content">
            <Link to={'/login'} className="back-btn">
                <Button variant='filled' value='Выйти'className='red__btn log-out_btn'/>
            </Link>
            </div>
        </div>
    );

}
export default Settings;