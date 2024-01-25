import styles from "./styles.module.scss";

import { RestaurantReviews } from "../RestaurantReviews/component";
import { RestaurantMenus } from "../RestaurantMenus/component";

export const Restaurant = ({ restaurant }) => {
    return (
        <div className={styles.item}>
            <h2>{restaurant.name}</h2>
            <RestaurantMenus menu={restaurant.menu} />
            <RestaurantReviews reviews={restaurant.reviews} />
        </div>
    );
};
