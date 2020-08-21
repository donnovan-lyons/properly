import { createSlice } from '@reduxjs/toolkit';

export const addressSlice = createSlice({
  name: 'addresses',
  initialState: {
    addresses: [], addressSearchResults: []
  },
  reducers: {
    findAddress(state, action) {
    }
  },
});

export const { findAddress } = addressSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
 
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

export default addressSlice.reducer;
