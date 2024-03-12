import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const DrawGameField = ({ row, col, letterBoxes, setLetterBoxes, typedWord, keyList }) => {

    const [className, setClassName] = useState();

    useEffect(() => {
        drawField()
    }, [])

    const drawField = () => {
        const boxes = [];
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                boxes.push(<div key={`${i}-${j}`} className="letterBox"></div>);
            }
        }
        setLetterBoxes(boxes)
    }

    const fillBox = (idx) => {
        let filled = '';

        filled = typedWord.slice(idx)[0]

        return filled
    }

    const letterBoxesGridStyle = {
        gridTemplateColumns: `repeat(${row}, 80px)`,
        gridTemplateRows: `repeat(${col}, 80px)`,
    }

    return (
        <div className="DrawGameField">
            <div className="letterBoxes" style={letterBoxesGridStyle}>
                {
                     letterBoxes.map((box, idx) => {
                        let currentObj;
                        for (const [key, value] of Object.entries(keyList)) {
                            currentObj = value.find(item => item.key === box.key);
                            if (currentObj) {
                                break;
                            }
                        }
                        return <div key={idx} className={`letterBox ${currentObj?.className || ''}`}>{fillBox(idx)}</div>
                    })
                }
            </div>
        </div>
    );

}
export default DrawGameField;