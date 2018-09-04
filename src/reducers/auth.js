export default (state={}, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                uid: action.uid,
                userName: action.userName,
                userImg: action.userImg
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
}