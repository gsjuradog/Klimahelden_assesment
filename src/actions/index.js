
export const GETDATA = 'GET_DATA';
export const FAILEDGETDATA = 'FAILED_GET_DATA';
export const LOADINGDATA = 'LOADING_DATA'
const key = process.env.REACT_APP_DUMMY_KEY

export const loadingData = ()=> {
    return {type: LOADINGDATA}
}
export const addData = (data)=> {
    return {type: GETDATA, payload: {data} , error:null}
}

export const failedAPIcall = (error) =>{
   return {
        type: FAILEDGETDATA,
        payload: `error while fetching from API: ${error.message}`
    }
}

export const getData =  () => {
    
    return async (dispatch, getState) => {
        dispatch(loadingData())
        await fetch(`https://dummyapi.io/data/api/post/`, {
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
