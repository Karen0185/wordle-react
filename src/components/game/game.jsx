import React, { useState,useEffect } from "react";
import DrawGameField from "./drawGameField";
import Popup from "../popup/popup";
import { CSSTransition } from 'react-transition-group';

import { useDispatch, useSelector } from "react-redux";
import { selectPage,changePageName } from '../../redux/reducers/showPagesSlice';
import { AES, enc } from 'crypto-js';


import './game.scss';


const Game = () => {
    const [focused, setFocused] = useState(false);
    const [typedWord, setTypedWord] = useState('')
    const [activeRow, setActiveRow] = useState(0);
    const [activeCol, setActiveCol] = useState(0);
    const row = 5;
    const col = 5;

    const [hashWord, setHashWord] = useState(window.location.hash.substring(1))
    const [letterBoxes, setLetterBoxes] = useState([]);
    const [secretWord, setSecretWord] = useState('bajak');
    const [keyList, setKeyList] = useState({
        correctList: [],
        wrongList: [],
        elsewhereList: []
    });

    const [win, setWin] = useState(false);

    const decrypt = (cipherText, key) => {
        const bytes = AES.decrypt(cipherText, key);
        return bytes.toString(enc.Utf8);
    };

   useEffect(() => {
       if (hashWord) {
        const key = "de4r5qisjB_09sah74F5_09djJ";
        const decryptedText = decrypt(hashWord, key);
        setSecretWord(decryptedText);
    }
   }, [])

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const handleKeyDown = (event) => {
        const allowedSymbols = /^[a-zA-Z]$/.test(event.key);

        if (focused) {
            if (allowedSymbols && activeRow < row) {
                setTypedWord((prevTypedWord) => prevTypedWord + event.key.toUpperCase());
                setActiveRow((prevActiveRow) => prevActiveRow + 1);
            }
            if (event.key === 'Enter' && activeRow === row) {
                apllyRow()
                setActiveRow(0);
                setActiveCol((prevActiveCol) => prevActiveCol + 1);

                if (secretWord.toUpperCase() === typedWord.slice(activeCol * row)) {
                    setWin(true)
                }
            }
            if (event.key === 'Backspace' && activeRow > 0) {
                setTypedWord((prevTypedWord) => prevTypedWord.slice(0, -1));
                setActiveRow((prevActiveRow) => prevActiveRow - 1);
            }
        }

    };

    const apllyRow = () => {
        const success = [...keyList.correctList];
        const elsewhere = [...keyList.elsewhereList];
        const wrong = [...keyList.wrongList];

        for (let i = 0; i < secretWord.length; i++) {
            const typedLetter = typedWord[i + (activeCol * row)];
            const secretLetter = secretWord[i].toUpperCase();

            if (typedLetter === secretLetter) {
                success.push({
                    key: letterBoxes[i + (activeCol * row)].key,
                    className: 'correct'
                });
            } else if (secretWord.toUpperCase().includes(typedLetter) && typedLetter !== secretLetter) {
                elsewhere.push({
                    key: letterBoxes[i + (activeCol * row)].key,
                    className: 'elsewhere'
                });
            } else if (!secretWord.toUpperCase().includes(typedLetter)) {
                wrong.push({
                    key: letterBoxes[i + (activeCol * row)].key,
                    className: 'wrong'
                });
            }
        }

        setKeyList({
            correctList: success,
            wrongList: wrong,
            elsewhereList: elsewhere
        });
    }

    const playAgain = () => {
        setActiveRow(0)
        setActiveCol(0)
        setKeyList({
            correctList: [],
            wrongList: [],
            elsewhereList: []
        })
        setTypedWord('')
    }

    const dispatch = useDispatch()
    const pageName = useSelector(selectPage)

    useEffect(() => {
        dispatch(changePageName('game'))
    }, [])

    return (
        <div
            className="Game"
            tabIndex={0}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            style={{ outline: "none" }}
        >
            <CSSTransition in={win} timeout={300} classNames='popup' unmountOnExit>
                {
                    <Popup playAgain={playAgain} setSecretWord={setSecretWord} setWin={setWin} word={secretWord}/>
                }
            </CSSTransition>
            <DrawGameField
                row={row}
                col={col}
                typedWord={typedWord}
                letterBoxes={letterBoxes}
                setLetterBoxes={setLetterBoxes}
                keyList={keyList}
            />
        </div>
    );
};

export default Game;