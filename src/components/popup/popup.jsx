import Button from '../UI/Button';
import './popup.scss'

const Popup = ({playAgain, setSecretWord, setWin, word}) => {
    
    const handleClick = () => {
        setSecretWord('bajak')
        if (window.location.hash) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
        }
    }

    return (
        <div className="PopupWrap">
            <h2>Вы выграли</h2>
            <h3>Секретное слово было "{word.toUpperCase()}"</h3>
            <Button variant='filled' clickAction={() => {
                playAgain()
                setWin(false)
                handleClick()
            }} value={'Играть еще'} />
        </div>
    );

}
export default Popup;