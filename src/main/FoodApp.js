
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";


/*
    Header
        - Logo
        - Nav Items
            - Home
            - About
            - Contact
            - Cart
    Body
        - Search Bar
        - Restaurant List
            - Restaurant Card
                - Image
                - Name
                - Rating
                - Cuisine
                - Delivery Time
    Footer
        - Links
        - About Us
        - Contact Us
        - Privacy Policy
        - Terms of Service 
*/

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);





// const Header = () =>
// (
//     <div className="header">
//         <div className="logo-container">
//             <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqNNWx6mHXIVtL480D7Gd-bcSaufI5300nQ&s" />
//         </div>
//         <div className="nav-items">
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li>Cart</li>
//             </ul>
//         </div>
//     </div>
// )


//imported data via json file.

// import resList from './FoodData.json';
// const RestaurantCard = (props) => {
//     const { resData } = props;
//     const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
//     return (
//         <div className="res-card" style={style}>
//             <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Res Image" />
//             <h3>{name}</h3>
//             <h4>{avgRating}</h4>
//             <h4>{cuisines.join(", ")}</h4>
//             <h4>{costForTwo}</h4>
//         </div>
//     )
// }
// const style = {
//     background: "honeydew"
// }
// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search-container">
//                 <input type="text" placeholder="Search" />
//             </div>
//             <div className="res-list" >
//                 {
//                     resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
//                 }
//             </div>
//         </div>
//     )
// }
