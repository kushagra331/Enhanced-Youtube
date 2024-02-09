import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

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
  const My_Google_API_Key='AIzaSyBOOeQGW_Zp9c-lTPjpwjAbz6cvh0ACG90'
  const api="https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key="+My_Google_API_Key;
  async function getComments(){
    const data= await fetch(api);
    const jsondata=await data.json();
    console.log(jsondata)
  }
  return (
    <div>
      <iframe width="1000" height="500" 
      src={"https://www.youtube.com/embed/"+vid}
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>

    </div>
  )
}

export default Watch
