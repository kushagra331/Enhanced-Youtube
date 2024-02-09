import Videodiv from './Videodiv'
import { useEffect, useState } from "react";
import {Youtube_Videos_API} from '../utils/constants'
import { Link } from 'react-router-dom';
const VideosSection = () => {
  const [videosData,setVideosData]=useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  async function getVideos(){
    // const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyBOOeQGW_Zp9c-lTPjpwjAbz6cvh0ACG90");
    try {
      const data = await fetch(Youtube_Videos_API);
      const jsondata = await data.json();
      setVideosData(jsondata.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }
  return (
    <div className='flex flex-wrap'>
      {
        videosData.map((res)=> (
          <Link to={'/watch?v='+res.id} key={res.id}><Videodiv info={res} /></Link>
      ))
      }
      
      {/* <Videodiv info={videosData[0]} key={videosData[0].id} /> */}
    </div>
  )
}

export default VideosSection;
