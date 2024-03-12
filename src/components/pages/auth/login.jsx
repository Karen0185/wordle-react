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
        dispatch(changePageName('login'))
    })

    const handleClickLogin = (e) => {
        navigate('/')
    }

    const handleClickRegistration = (e) => {
        navigate('/registration')
    }

    const handleClickGuest = (e) => {
        navigate('/guest')
    }

    return (
        <div className="Login">
            <h2 className='auth-title'>Войти </h2>
            <div className="auth-content">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input className="login_username username" type="text" placeholder="Имя ползователья" />
                    <input className="login_password password" type="password" placeholder="Пороль" />
                    <Button variant='filled' className="light__btn login-btn" value='Войти' clickAction={handleClickLogin} />
                </form>
                <div className="auth_variants">
                    <Button variant='filled' className="light__btn auth_variants-btn" value='Играть как гость' clickAction={handleClickGuest} />
                    <Button variant='filled' className="auth_variants-btn" value='Регистрация' clickAction={handleClickRegistration} />
                </div>
            </div>
        </div>
    );

}
export default Login;