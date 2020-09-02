import { createSlice } from '@reduxjs/toolkit';

export const landlordsSlice = createSlice({
  name: 'landlords',
  initialState: {
    landlords: [], selectedLandlord: {}
  },
  reducers: {
    addLandlords: (state, action) => {
      state.landlords = action.payload
    },
    selectLandlord: (state, action) => {
      state.landlord = state.landlords.find(action.payload)
    }/*,
    addReviews: (state, action) => {
      state.reviews = action.payload
    },
    findReviews:  (state, action) => {
      state.landlordReviews = state.reviews.filter(review => review.id === action.payload.id)
    }, */
  },
});

export const { addLandlords, selectLandlord/*, addReviews, findReviews*/ } = landlordsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const searchLandlords = (query) => dispatch => {
  fetch(`http://localhost:3001/api/v1/landlords/search/${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include'
  })
  .then(response => response.json())
  .then(landlords => dispatch(addLandlords(landlords)) );
};

export const selectDisplayedLandlord = id => dispatch => {
  dispatch(selectLandlord(id));
};
 
// export const isAuthenticated = state => {
//   const expiresAt  = state.authorization.expiresAt
//   if (!expiresAt) {
//     return false
//   }
//   return new Date().getTime() / 1000 < expiresAt
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// export const selectAuth = state => ({
//   userInfo: state.authorization.userInfo,
//   token: state.authorization.token,
//   expiresAt: state.authorization.expiresAt
// });

export const selectLandlords = state => state.landlords.landlords
export const selectSelectedLandlord = state => state.landlords.selectedLandlord

export default landlordsSlice.reducer;
