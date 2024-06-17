import RestaurentCard from "./RestaurentCard";
import restaurantList from "../utils/restaurentList";

const Body = () => {
  return(
   <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((restaurant)=>{
          return <RestaurentCard key={restaurant.info.id} resdata={restaurant} />
        })}
      </div>
   </div>
  )
}

export default Body;