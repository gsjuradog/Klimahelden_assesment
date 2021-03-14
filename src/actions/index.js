
export const GETDATA = 'GET_DATA';
export const FAILEDGETDATA = 'FAILED_GET_DATA';

const key = process.env.REACT_APP_DUMMY_KEY


export const getData =  () => {
    return async (dispatch) => {
        await fetch(`https://dummyapi.io/data/api/post/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-id':`${key}`
            }
        })
        .then(res=>res.json())
        .then(data=>
             dispatch({
                type: GETDATA,
                payload:data,
            })
        )
        .catch(error => dispatch({
            type: FAILEDGETDATA,
            payload: `error while fetching from API: ${error.message}`
        }));
    }
    
    
}
