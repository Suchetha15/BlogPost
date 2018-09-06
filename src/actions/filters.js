//filter by title
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
  });

//sort by created date
export const sortByDateAsc = () => ({
    type: 'DATE_ASC'
  });

export const sortByDateDesc = () => ({
    type: 'DATE_DESC'
});

//sort by title ascending
export const sortByTitleAsc = () => ({
    type: 'TITLE_ASC'
});

//sort by title descending
export const sortByTitleDesc = () => ({
    type: 'TITLE_DESC'
});

export const openModal = (removeSelected = true) => ({
    type: 'OPEN_MODAL',
    removeSelected
});

export const closeModal = (removeSelected = false) => ({
    type: 'CLOSE_MODAL',
    removeSelected
});

// export const getBlogLength = (blogsLength) => ({
//   type: 'GET_BLOGLENGTH',
//   blogsLength
// });

// export const startGetBloglength = () => {
//   return (dispatch, getState) => {
//       const uid = getState().auth.uid;
  
//       return database.ref(`users/${uid}/blogs`).once('value').then((snapshot) => {
//         var blogsLength = '';

//         snapshot.forEach((childSnapshot) => {
//           blogsLength = childSnapshot.length;
         
//         });  
//         //console.log(blogsLength);
//         dispatch(getBlogLength(blogsLength));
//       });
//     };
// };