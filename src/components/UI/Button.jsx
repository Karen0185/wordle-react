import './ui.scss'

const Button = ({variant, value, clickAction, styles, className}) => {

return (
    <button 
        className={`Button ${className && className} ${variant == 'filled' ? 'filled' : 'outlined'} `}
        style={styles}
        onClick={clickAction}
        >{value}</button>
);

}
export default Button;