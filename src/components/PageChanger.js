import React from 'react'
import { increment, decrement } from "../actions";
import {connect, useDispatch} from 'react-redux';

function PageChanger({pageNumber, loading}) {
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

  if(loading) return null

  return (
    <div>
    <div className="page-changer-container">

      {pageNumber === 0? <p>You're in the first page</p>: <p>You're in page {pageNumber + 1}</p>}
      <div className="pageChanger-buttons">
        <button className="change-page-button" disabled={isPageZero} onClick={handleDecrementClick}>Back</button>
        <button className="change-page-button" onClick={handleIncrementClick}>Next</button>

      </div>
    </div>
  </div>
);
}
const mapStateToProps = (state) => {
  const { storeData } = state;

  return {
    pageNumber:storeData.page,
    loading: storeData.loading
  };
};

export default connect(mapStateToProps)(PageChanger);
