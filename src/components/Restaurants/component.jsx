import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../Restaurant/component";
import { Button } from "../Button/component";
import styles from "./styles.module.scss";

export const Restaurants = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
    return (
        <div>
            <h1>Список ресторанов</h1>

            <nav className={styles.nav}>
                {restaurants.map((restaurant, index) => (
                    <Button
                        onclick={() => {
                            setActiveRestaurantIndex(index);
                        }}
                    >
                        {restaurant.name}
                    </Button>
                ))}
            </nav>
            <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        </div>
    );
};
