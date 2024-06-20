import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [ListOfRes, setListOfRes] = useState([]);
  const [NewRes, setNewRes] = useState([]);
  // const [newList,setnewList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02600&lng=72.63260&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("Fetched data:", json);
    const restaurants =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(restaurants);
    setListOfRes(restaurants);
    setNewRes(restaurants);
  };

  const filterTopRated = () => {
    const filtered = ListOfRes.filter((res) => res.info.avgRating > 4.2);
    // console.log("Filtered top rated restaurants:", filtered);
    setListOfRes(filtered);
  };

  // console.log("body")

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="input"
            onChange={(e) => {
              const searchTerm = e.target.value;
              const newList = NewRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchTerm)
              );
              setListOfRes(searchTerm ? newList : NewRes);
            }}
          />
          <button
            onClick={() => {
              setListOfRes(NewRes);
            }}
          >
            search
          </button>
        </div>
        <button onClick={filterTopRated} className="top_rated">
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {ListOfRes.map((restaurant) => {
          return (
            <RestaurentCard key={restaurant.info.id} resdata={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
