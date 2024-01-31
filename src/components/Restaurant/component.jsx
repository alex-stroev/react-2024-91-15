import styles from "./styles.module.scss";

import { RestaurantReviews } from "../RestaurantReviews/component";
import { RestaurantMenu } from "../RestaurantMenu/component";

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.restaurant}>
            <h2>{restaurant.name}</h2>
            <h3>Меню:</h3>
            <RestaurantMenu menu={restaurant.menu} className={"grid"} />
            <h3>Отзывы:</h3>
            <RestaurantReviews reviews={restaurant.reviews} />
        </div>
    );
};
