import React, {useEffect} from 'react';
import { getData } from '../actions';
import {connect} from 'react-redux';
import Post from '../components/Post';



function PostContainer({setData, data, loading, error, page}) {
  
  useEffect(()=>{
    setData(page)
    
  },[page])

  if (error) return <p>{error}</p>

  return (
    <div className="post-container">
    {data.length > 0? data[0].map(post=><Post key={post.id} post={post}></Post> ): <h1>loading</h1>}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setData: (pageNum)=> dispatch(getData(pageNum))
  }
};

const mapStateToProps = (state)=>{
  const {storeData} = state
  console.log('data map: ',storeData.data[0])
  return {
   data:storeData.data, 
   error:storeData.error,
   loading:storeData.loading,
   page:storeData.page
   

 } 
};

export default connect( mapStateToProps,mapDispatchToProps)(PostContainer)