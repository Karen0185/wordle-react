import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { useEffect } from 'react';
import { changePageName } from '../../../redux/reducers/showPagesSlice';
import { useNavigate } from 'react-router-dom';
import './auth.scss'

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(changePageName('registration'))
    })

    const handleClickRegistration = (e) => {
        navigate('/login')
    }


    return (
        <div className="Registration">
            <h2 className='auth-title'>Регистрация</h2>
            <div className="auth-content">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input className="registration_email email " type="text" placeholder="Е-Майл" />
                    <input className="registration_username username" type="text" placeholder="Имя ползователья" />
                    <input className="login_password password" type="password" placeholder="Пороль" />
                    <input className="registration_confirmPassword confirmPassword" type="password" placeholder="Подвердите пороль" />
                </form>
                <div className="auth_variants">
                    <Button variant='filled' className="auth_variants-btn registration-btn" value='Регистрация' clickAction={handleClickRegistration} />
                </div>
            </div>
        </div>
    );

}
export default Login;