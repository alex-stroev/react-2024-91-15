import styles from "./styles.module.scss";
import { Dish } from "../Dish/component";

export const RestaurantMenu = ({ menu }) => {
    return menu ? (
        <div className={styles.menu}>
            {menu.map((dish) => (
                <Dish dish={dish} />
            ))}
        </div>
    ) : null;
};
