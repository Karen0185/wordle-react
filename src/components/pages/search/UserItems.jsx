import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePageName } from '../../../redux/reducers/showPagesSlice'
import { RiSendPlaneFill } from "react-icons/ri";
import './search.scss';


const UserItems = () => {

    const [users, setUsers] = useState([
        {
            name: 'Karen0198'
        },
        {
            name: 'Karen0199'
        },
        {
            name: 'Karen0200'
        }
    ])
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePageName('search'))
    },[])


return (
     users ? users.map((user) => {
        <div className="user_item">
        <div className="user_avatar">
            <p>K</p>
        </div>
        <div className="user_name">{user.name}</div>
        <div className="grid">
            <div className="send_word">
                <input type="text" className="send_word-input" placeholder="Отправить слово"/>
                <button>
                    <RiSendPlaneFill />
                </button>
            </div>
        </div>
    </div>
    }) :
    'asd'
);

}
export default UserItems;