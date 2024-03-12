import { useDispatch } from "react-redux";
import { changePageName } from '../../redux/reducers/showPagesSlice'
import { useEffect } from "react";

const Notifiactions = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changePageName('notification'))
       },[])

    return (
        <div className="Notifiactions page">
            <h1>Уведомления</h1>
        </div>
    );

}
export default Notifiactions;