const setDefaultState =[]

export default (state = setDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
          return [
            ...state,
            action.blog
          ];
        case 'SET_BLOG':
          return action.blogs;
        case 'GET_BLOGLENGTH':
          return action.blogsLength;
        case 'UPDATE_BLOG':
          return state.map((blog) => {
            if(blog.id === action.id){
              return {
                ...blog,
                ...action.updates
              }        
            }else {
              return blog;
            }
          });
        case 'REMOVE_BLOG':
          return state.filter(({id}) => (id !== action.id));
        default:
         return state;
    }
};