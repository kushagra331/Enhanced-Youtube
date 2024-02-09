import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {Link} from 'react-router-dom'


const Header = () =>{
    const [input,setInput]=useState();
    const dispatch=useDispatch();
    //toggleMenuHandler
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
    return(
        <div className="grid grid-flow-col p-4 m-1 shadow-lg">
            <div className="flex col-span-1 gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" 
                className="h-8 cursor-pointer"
                onClick={()=>toggleMenuHandler()}><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
                </svg>
                <Link to='/'>
                <img 
                className="h-8 cursor-pointer"
                src="https://ongpng.com/wp-content/uploads/2023/04/3.youtube-logo-2416x776-1.png" alt="logo" />
                </Link>
            </div>
            
            <div className="col-span-10 text-center flex justify-center">
                <input className="h-8 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"
                value={input}
                onChange={(e)=>{
                    setInput(e.target.value);
                }} />
                <button className="h-8 border bg-gray-100 rounded-r-full px-3 py-1">
                    {/* style="pointer-events: none; display: block; width: 100%; height: 100%;" */}
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>
                </button>
            </div>    
            <div className="col-span-1">
                <img 
                className="h-8"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
            </div>    
        </div>
    )
}

export default Header;