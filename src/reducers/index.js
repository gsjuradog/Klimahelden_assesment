import {combineReducers} from 'redux'
import { FAILEDGETDATA, GETDATA, LOADINGDATA } from '../actions'

const initialState = {
    loading:false,
    data: [],
    error: null
  };

const storeData = (state = initialState, action) => {
    switch (action.type) {
        case LOADINGDATA:
            return {...state, 
                loading: true
            }
        
        case GETDATA:
            return {...state, 
                loading:false,
                data: [
                     action.payload.data
                    ]
            }
        case FAILEDGETDATA:
            return {...state, 
                loading:false,
                error: [
                    ...state.error,
                     action.payload
                    ]
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    storeData
})

export {rootReducer, initialState}
