
import { useDispatch, useSelector } from "react-redux";
import { selectPage,changePageName } from '../../redux/reducers/showPagesSlice'
import { useEffect, useState } from "react";
import { AES, enc } from 'crypto-js';

const SendWord = () => {

    const [word, setWord] = useState('')

    const dispatch = useDispatch()
    const pageName = useSelector(selectPage)

   useEffect(() => {
    dispatch(changePageName('send_word'))
   },[])

   const encrypt = (text, key) => {
        return AES.encrypt(text, key).toString();
    };

    
    const originalText = word;
    const key = "de4r5qisjB_09sah74F5_09djJ";

   const handleClick = () => {

    const encryptedText = encrypt(originalText, key);
console.log("Зашифрованный текст:", encryptedText);
    
    const baseUrl = window.location.origin;
    const newUrl = `${baseUrl}/#${encryptedText}`;
    navigator.clipboard.writeText(newUrl);
};

    return (
        <div className='SendWord page'>
            <h1>Отправить слово другу</h1>
            <div className="page-content">
                <input type="text" value={word} onInput={(e) => {setWord(e.target.value)}}/>
                <button onClick={handleClick}>Скопировать</button>
            </div>
        </div>
    );

}
export default SendWord;