import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'authorization',
  initialState: {
    userInfo: {}, expiresAt: null, isLoggedIn: false
  },
  reducers: {
    update: (state, action) => {
      state.userInfo = action.payload.user
      state.expiresAt = action.payload.exp_time
      state.isLoggedIn = true
    },
    checkAuthentication: state => {
      if (!state.expiresAt) {
        state.isLoggedIn = false
      } else {
        const time = new Date().getTime()
        if (time < state.expiresAt) {
          state.isLoggedIn = true
        } else {
          state.isLoggedIn = false
          logout()
        }
      }
    },
    userLogout(state, action) {
      return {userInfo: {}, expiresAt: null, isLoggedIn: false}
    }
  },
});

export const { update, checkAuthentication, userLogout } = authSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const logIn = credentials => dispatch => {
  fetch('http://localhost:3001/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(credentials)
  })
  .then(response => response.json())
  .then(json => {
    if (json.message) {
      alert(json.message)
    } else {
      dispatch(update(json))
    }
  });
};

export const signUp = info => dispatch => {
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(info)
  })
  .then(response => response.json())
  .then(json => {
    if (json.error) {
      alert(json.error);
    } else {
      dispatch(update({userInfo: json.user, expiresAt: json.exp_time}))
    }
  });
};

export const logout = () => dispatch => {
  localStorage.removeItem('state')

  dispatch(userLogout())

  fetch(`http://localhost:3001/api/v1/logout`, {
    method: 'DELETE',
    credentials: 'include'
  })
}

export const isAuthenticated = () => dispatch => {
  dispatch(checkAuthentication());
};



export const loginStatus = () => dispatch => {
  fetch(`http://localhost:3001/api/v1/login_status`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include'
  }).then(res => res.json())
  .then(json => dispatch(update({userInfo: json, isLoggedIn: true})))
  .catch(err => console.error(err));
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

export const selectIsLoggedIn = state => state.authorization.isLoggedIn

export default authSlice.reducer;
