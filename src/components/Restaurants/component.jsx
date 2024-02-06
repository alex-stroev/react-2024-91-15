import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../Restaurant/component";
import styles from "./styles.module.scss";
import { RestaurantTabs } from "../RestaurantTabs/component";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const Restaurants = () => {
    const initialActiveRestaurantID = restaurants[0].id;
    const [activeRestaurantID, setActiveRestaurantID] = useState(initialActiveRestaurantID);
    const restaurantsIDs = useSelector(selectRestaurantIds);

    return (
        <div>
            <h1>Список ресторанов</h1>
            <nav className={styles.nav}>
                {restaurantsIDs.map((id) => (
                    <RestaurantTabs isCurrent={id === activeRestaurantID} onSelect={setActiveRestaurantID} id={id} key={id} />
                ))}
            </nav>

            <Restaurant restaurant={restaurants.find((restaurant) => restaurant.id === activeRestaurantID)} />
        </div>
    );
};
