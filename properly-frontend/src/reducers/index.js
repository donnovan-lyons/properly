import { combineReducers } from 'redux'
import authReducer from '../features/authSlice'
import landlordsReducer from '../features/landlordsSlice'

export default combineReducers({
    authorization: authReducer,
    landlords: landlordsReducer
})