import {combineReducers} from 'redux'
import { FAILEDGETDATA, GETDATA } from '../actions'

const initialState = {
    data: [],
    error: null
  };

const storeData = (state = initialState, action) => {
    switch (action.type) {
        case GETDATA:
            return {...state, 
                data: [...state.data, action.payload]
            }
        case FAILEDGETDATA:
            return {...state, 
                data: [...state.data, action.payload]
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    storeData
})

export default rootReducer
