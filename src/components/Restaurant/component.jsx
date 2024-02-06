import styles from "./styles.module.scss";

import { RestaurantReviews } from "../RestaurantReviews/component";
import { RestaurantMenu } from "../RestaurantMenu/component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({ restaurantId }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    return (
        <div className={styles.restaurant}>
            <h2>{restaurant.name}</h2>
            <h3>Меню:</h3>
            <RestaurantMenu restaurantId={restaurantId} className={"grid"} />
            <h3>Отзывы:</h3>
            <RestaurantReviews restaurantId={restaurantId} />
        </div>
    );
};
