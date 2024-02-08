import { useState } from "react";
import { Restaurant } from "../Restaurant/component";
import styles from "./styles.module.scss";
import { RestaurantTabs } from "../RestaurantTabs/component";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();
    const restaurantsIDs = useSelector(selectRestaurantIds);

    return (
        <div>
            <h1>Список ресторанов</h1>
            <nav className={styles.nav}>
                {restaurantsIDs.map((restaurantId) => (
                    <RestaurantTabs isCurrent={restaurantId === activeRestaurantId} onSelect={setActiveRestaurantId} restaurantId={restaurantId} />
                ))}
            </nav>

            {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
        </div>
    );
};
