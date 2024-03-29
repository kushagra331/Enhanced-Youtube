import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  // if(!isMenuOpen) return null
  return (!isMenuOpen) ? (
    <div className="w-22  shadow-lg">
      <ul>
        <li className="grid place-items-center text-xs p-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg"  height="24" width="24"><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg>
          <Link to='/'>Home</Link>
        </li>
        <div className="grid place-items-center text-xs p-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" height="24"  width="24"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg>
          <h1>Shorts</h1>
        </div>
        <li className="grid place-items-center text-xs p-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" height="24"width="24"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg>
          <h1>Subscriptions</h1>
        </li>
        <li className="grid place-items-center text-xs p-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" height="24"  width="24"><path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg>
          <h1>You</h1>
        </li>
      </ul>
    </div>
  ) 
  : (
    <div className='w-36 shadow-lg'>
      <ul>
      <li className="cursor-pointer">Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5 ">Subcription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Last watch</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar;
