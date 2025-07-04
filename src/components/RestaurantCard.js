import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
    const style = {
        background: "honeydew"
    }
    return (
        <div className="res-card" style={style}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="Res Image" />
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;