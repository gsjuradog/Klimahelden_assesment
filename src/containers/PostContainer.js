import React, {useEffect} from 'react';
import { getData } from '../actions';
import {connect} from 'react-redux';
import Post from '../components/Post';



function PostContainer({setData, data, loading, error}) {
  useEffect(()=>{
    setData()
    if(data.length>0) console.log('props: ',data)
  },[])

  return (
    <div className="post-container">
    {data.length > 0? data[0].map(post=><Post key={post.id} post={post}></Post> ): <h1>loading</h1>}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setData: ()=> dispatch(getData())
  }
};

const mapStateToProps = (state)=>{
  const {storeData} = state
  console.log('data map: ',storeData.data[0])
  return {
   data:storeData.data, 
   error:storeData.error,
   loading:storeData.loading

 } 
};

export default connect( mapStateToProps,mapDispatchToProps)(PostContainer)