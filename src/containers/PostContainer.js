import React, {useEffect} from 'react';
import { getData } from '../actions';


export default function PostContainer() {
  useEffect(async ()=>{
    await getData()
  })
  return (
    <div>
      
    </div>
  )
}
