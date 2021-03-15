import React from 'react'
import { increment, decrement } from "../actions";
import {connect, useDispatch} from 'react-redux';

function Counter({pageNumber}) {
  const dispatch = useDispatch()
  const handleIncrementClick = (e) => {
    e.preventDefault();

    window.scrollTo(0, 0)
    dispatch(increment());
  };

  const handleDecrementClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0)
    
    dispatch(decrement());
  };

  const isPageZero = pageNumber===0? true: false;

  return (
    <div>
    <div>
      {pageNumber === 0? <p>You're in the first page</p>: <p>You're in page {pageNumber}</p>}
      <button disabled={isPageZero} onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
    </div>
  </div>
);
}
const mapStateToProps = (state) => {
  const { storeData } = state;

  return {
    pageNumber:storeData.page
  };
};

export default connect(mapStateToProps)(Counter);
