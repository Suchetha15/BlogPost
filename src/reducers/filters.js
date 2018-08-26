const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date_asc'
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text 
            };
        case 'DATE_ASC':
            return {
                ...state,
                sortBy: 'date_asc'
            }
             
        case 'DATE_DESC':
            return {
                ...state,
                sortBy: 'date_desc'
            } 
        case 'TITLE_ASC':
            return {
                ...state,
                sortBy: 'title_asc'
            } 
        case 'TITLE_DESC':
            return {
                ...state,
                sortBy: 'title_desc'
            }  
        // case 'GET_BLOGLENGTH':
        //     return {
        //         ...state,
        //         blogsLength: action.blogsLength
        //     }
        default:
            return state;
    }
};

