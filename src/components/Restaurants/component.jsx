import styles from "./styles.module.scss";
import { restaurants } from "../../materials/mock";
import { Restaurant } from "../Restaurant/component";

export const Restaurants = () => {
    console.log(restaurants);
    return (
        <div>
            <h1>Список ресторанов</h1>

            <div className={styles.list}>
            {restaurants.map((item) => {
                return <Restaurant restaurant={item} />;
            })}
            </div>
        </div>
    );
};
