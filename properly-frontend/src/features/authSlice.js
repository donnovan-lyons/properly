import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authorization',
  initialState: {
    userInfo: {}, token: null, expiresAt: null
  },
  reducers: {
    update(state, action) {
      return action.payload.payload
    },
  },
});

export const { update } = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const logIn = credentials => dispatch => {
  console.log("logging in")
  fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(response => response.json())
  .then(json => dispatch(update({payload: {userInfo: json.user.data, token: json.jwt, expiresAt: json.exp}})));
};

export const signUp = info => dispatch => {
  fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(info)
  })
  .then(response => response.json())
  .then(json => dispatch(update({userInfo: json.user.data, token: json.jwt, expiresAt: json.exp})));
};

export const isAuthenticated = state => {
  const token = state.authorization.token;
  const expiresAt  = state.authorization.expiresAt
  if ( !token || !expiresAt) {
    return false
  }
  return new Date().getTime() / 1000 < expiresAt
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// export const selectAuth = state => ({
//   userInfo: state.authorization.userInfo,
//   token: state.authorization.token,
//   expiresAt: state.authorization.expiresAt
// });
export const selectUserInfo = state => state.authorization.userInfo

export const selectToken = state => state.authorization.token

export const selectExpiresAt = state => state.authorization.expiresAt

export default authSlice.reducer;
