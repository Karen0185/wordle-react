import { combineReducers, createStore } from "redux"
import { showPagesReducer, initialShowPages } from '../redux/reducers/showPagesSlice'

const store = createStore(combineReducers({
    showPages: showPagesReducer
}),{
    showPages: initialShowPages
})

export default store