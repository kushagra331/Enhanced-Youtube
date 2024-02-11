import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './CommentsContainer';
import {Watch_API} from '../utils/constants'
import LiveChat from './LiveChat';
const Watch = () => {
  const [searchParams]=useSearchParams();
  const vid= searchParams.get('v');
  console.log(searchParams)
  console.log(vid)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(closeMenu());
    getComments();
  },[]);
  async function getComments(){
    const data= await fetch(Watch_API);
    const jsondata=await data.json();
    console.log(jsondata)
  }
  return (
    <div className=' bg-gray-100 w-full'>
      <div className='flex px-5'>
        <div key={1}>
          <iframe width="850" height="500" 
          src={"https://www.youtube.com/embed/"+vid}
          title="YouTube video player"  
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen></iframe>
        </div>
        <div key={2} className='w-full'>
          <LiveChat/>
        </div>
      </div>
      <Comments/>
    </div>
  )
}

export default Watch
