import { combineReducers } from 'redux'
import authReducer from '../features/authSlice'
import landlordsReducer from '../features/landlordsSlice'
import addressReducer from '../features/addressSlice'

export default combineReducers({
    authorization: authReducer,
    landlords: landlordsReducer,
    addresses: addressReducer
})