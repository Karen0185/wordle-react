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
        dispatch(changePageName('guest'))
    })

    const handleClickLogin = (e) => {
        navigate('/')
    }

    return (
        <div className="Login">
            <h2 className='auth-title'>Войти как гость</h2>
            <div className="auth-content">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input className="login_username username" type="text" placeholder="Имя ползователья" />
                    <Button variant='filled' className="light__btn login-btn" value='Войти' clickAction={handleClickLogin} />
                </form>
            </div>
        </div>
    );

}
export default Login;