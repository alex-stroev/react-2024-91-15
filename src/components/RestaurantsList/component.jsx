import styles from "./styles.module.scss";
import { restaurants } from "../../materials/mock";
import { RestaurantItem } from "../RestaurantItem/component";

export const RestaurantsList = () => {
    console.log(restaurants);
    return (
        <div>
            <h1>Список ресторанов</h1>

            <div className={styles.list}>
            {restaurants.map((item) => {
                return <RestaurantItem restaurant={item} />;
            })}
            </div>
        </div>
    );
};
