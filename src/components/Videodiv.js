import React from 'react'
const Videodiv = ({info}) => {debugger;
  console.log("info==",info);
  const {snippet,statistics}=info;
  const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-lg'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li key={1} className='font-bold py-2'>{title}</li>
        <li key={2} className='font-semibold'>{channelTitle}</li>
        <li key={3} >{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
}

export default Videodiv
