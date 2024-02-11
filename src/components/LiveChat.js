import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { RandomNameGenerator, displayRandomMessage } from '../utils/Helper';

const LiveChat = () => {
    const dispatch=useDispatch();
    const [liveMsg,setLiveMsg]=useState();
    const chatdata=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("API Polling")
            dispatch(addMessage({
                name:RandomNameGenerator(),
                msg:displayRandomMessage()
            }))
        },3000)
        
        return ()=> clearInterval(timer)
    },[])
  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatdata.map((data,index)=>(
        <ChatMessage name={data.name} msg={data.msg} key={index}/>
        ))}
    </div>
    <form className='w-full p-2 ml-2 border border-black'
    onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"kush",
            msg:liveMsg
        }))
        setLiveMsg('')
    }}>
        <input className='w-80' type="text" value={liveMsg}
        onChange={(e)=>setLiveMsg(e.target.value)}/>
        <button className='px-2 mx-2 bg-green-200 rounded-sm'>send</button>
    </form>
    </>
  )
}

export default LiveChat
