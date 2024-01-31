import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../Restaurant/component";
import styles from "./styles.module.scss";
import { RestaurantTabs } from "../RestaurantTabs/component";
import { ReviewForm } from "../ReviewForm/component";

export const Restaurants = () => {
    const initialActiveRestaurantID = restaurants[0].id;
    const [activeRestaurantID, setActiveRestaurantID] = useState(initialActiveRestaurantID);

    return (
        <div>
            <h1>Список ресторанов</h1>
            <ReviewForm />
            <nav className={styles.nav}>
                {restaurants.map((restaurant) => (
                    <RestaurantTabs
                        isCurrent={restaurant.id === activeRestaurantID}
                        onclick={() => {
                            setActiveRestaurantID(restaurant.id);
                        }}
                    >
                        {restaurant.name}
                    </RestaurantTabs>
                ))}
            </nav>
            <Restaurant restaurant={restaurants.find((restaurant) => restaurant.id === activeRestaurantID)} />
        </div>
    );
};
