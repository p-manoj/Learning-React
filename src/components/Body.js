import RestaurantCard from './RestaurantCard';
import resList1 from '../utils/FoodData.json';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';


const Body = () => {

    const [List, setList] = useState([]); //for initial restaurant list
    const [resList, setResList] = useState([]); //for restaurant list
    const [searchText, setSearchText] = useState(""); //for searching restaurants

    useEffect(() => {
        fetchData();
        console.log("Data fetched");
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.4631098&lng=75.4094926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const resData = await data.json();
        const resCards = resData?.data?.cards;
        for (let cards of resCards) {
            const restaurant = cards?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (restaurant) {
                console.log(restaurant);
                setList(restaurant);
                setResList(restaurant);
                break;
            }
        }
    }

    //Conditional Rendering
    // if (resList.length === 0) {
    //     return <Shimmer />;
    // }

    return (
        <div className="body">
            <div className='filter-container'>
                <div className='search-container'>
                    <input type="text"
                        placeholder="Search for restaurants"
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }} />
                    <button onClick={() => {
                        const filteredList = List.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setResList(filteredList);
                        console.log(searchText);
                    }}>Search</button>
                </div>
                <div className="search-container">
                    <button onClick={() => {
                        const filteredList = resList.filter((restaurant) => restaurant.info.avgRating > 4.3);
                        setResList(filteredList);
                    }}>
                        Top Rated Restaurant</button>
                </div>
            </div>
            {resList.length === 0 ? <Shimmer /> :
                (
                    <div className="resListContainer">
                        <div className="res-list" >
                            {
                                resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Body;
