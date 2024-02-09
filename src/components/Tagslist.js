import React from 'react'
import Btn from './Btn'
const list=["All", "Games", "News", "Discover","Live","Cricket","Cooking","Batman","Life","Adventure","Sports","Chess","Awards"];
const Tagslist = () => {
  return (
    <div className='flex'>
      {
      list.map((res)=>(
        <Btn name={res} key={res} />
      ))
      }
    </div>
  )
}
export default Tagslist;
// filteredRestaurant.map((restaurant)=>(
//   <Link to={"/restmenu/"+restaurant?.info?.id} key={restaurant?.info?.id} className="ok">
//       <RestaurantCard {...restaurant?.info} />    
//   </Link>        
// ))