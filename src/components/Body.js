
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
const Body = () => {
  return (
    <div className='flex gap-1 w-full'>
        <Sidebar/>
        <Outlet/>
        {/* <MainContainer/> */}
    </div>
  )
}

export default Body;
