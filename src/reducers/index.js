import {combineReducers} from 'redux'
import { 
    FAILEDGETDATA, 
    GETDATA, 
    LOADINGDATA,
    INCREMENT, 
    DECREMENT
} from '../actions'

const initialState = {
    loading:false,
    data: [],
    error: null,
    page:0

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
                error: action.payload
                    
            }
        case INCREMENT:
            return {...state,
                page:state.page+1} 
        case DECREMENT:
            return  {...state,
                page:state.page-1} 
        default:
            return state

    }
}

const rootReducer = combineReducers({
    storeData
    
})

export {rootReducer, initialState}
