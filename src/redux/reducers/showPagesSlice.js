export const showPagesReducer = (state={}, action) => {
    if(action.type === 'change-show-pages') {
        return {
            pageName: action.payload.pageName
        };
    }
    return state;
}

export const initialShowPages = {
    pageName: 'game',
};

export const selectPage = ((state) => {
    return state.showPages.pageName;
})

export const changePageName = ((newName) => {
    return {
        type: 'change-show-pages',
        payload: {
            pageName: newName
        }
    }
})