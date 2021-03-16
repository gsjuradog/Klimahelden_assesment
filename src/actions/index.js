
export const GETDATA = 'GET_DATA';
export const FAILEDGETDATA = 'FAILED_GET_DATA';
export const LOADINGDATA = 'LOADING_DATA';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
    type: INCREMENT
})
export const decrement = () => ({
    type: DECREMENT
})

export const loadingData = ()=> {
    return {type: LOADINGDATA};
};
export const addData = (data)=> {
    return {type: GETDATA, payload: {data} , error:null};
};

export const failedAPIcall = (error) =>{
   return {
        type: FAILEDGETDATA,
        payload: `error while fetching from API: ${error.message}`
    };
};

const key = process.env.REACT_APP_DUMMY_KEY || "60487454c1428373e71694de"

export const getData =  (pageNum=0) => {
    
    return async (dispatch, getState) => {
        dispatch(loadingData())
        await fetch(`https://dummyapi.io/data/api/post?page=${pageNum}&limit=10`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-id':`${key}`
            }
        })
        .then(res=>res.json())
        .then(res=>
            dispatch(addData(res.data))
        )
        .catch(error => dispatch(failedAPIcall(error)));
    }
    
    
}
