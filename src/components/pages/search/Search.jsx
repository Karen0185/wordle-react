import { IoIosSearch } from "react-icons/io";
import UserItem from "./UserItems";
import './search.scss'

const Search = () => {

    return (
        <div className="Search page">
            <h1>Поиск</h1>
            <div className="page-content">
            <div className="search_bar">
                    <div className="icon"><IoIosSearch /></div>
                    <input type="text" className="input_search" />
                </div>
                <div className="search_result">
                    <div className="users">
                        <UserItem />
                     </div>
                </div>
            </div>
        </div>
    );

}
export default Search;