import database from '../firebase/firebase';

//import React from 'react';
export const addBlog = (blog) => ({
    type: 'ADD_BLOG',
    blog
});

export const startAddBlog = (blogData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
          title = '',
          note = '',
          createdAt = 0
        } = blogData;
        const blog = { title, note,  createdAt}
    
        database.ref(`users/${uid}/blogs`).push(blog).then((ref) => {
         
          dispatch(addBlog({
            id: ref.id,
            ...blog
          }));
        });
      };
};
 
export const setBlog = (blogs) => ({
  type: 'SET_BLOG',
  blogs
});

export const startSetBlog = () => {
  return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/blogs`).once('value').then((snapshot) => {
        const blogs = [];
        snapshot.forEach((childSnapshot) => {
          blogs.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
         
        });  
        
        dispatch(setBlog(blogs));
      });
    };
};

//Update
export const updateBlog = (id, updates) => ({
  type: 'UPDATE_BLOG',
  id,
  updates
});

export const startUpdateBlog = (id, updates) => {
  return (dispatch, getState) => {
      const uid = getState().auth.uid;
  
      return database.ref(`users/${uid}/blogs/${id}`)
        .update(updates)
        .then(() =>{
        dispatch(updateBlog(id, updates));
      });
    };
};


//Remove
export const removeBlog = (id) => ({
  type: 'REMOVE_BLOG',
  id
});

export const startRemoveBlog = (id) => {
  return (dispatch, getState) => {
      const uid = getState().auth.uid;
  
      return database.ref(`users/${uid}/blogs/${id}`)
        .remove()
        .then(() =>{
        dispatch(removeBlog(id));
      });
    };
};




