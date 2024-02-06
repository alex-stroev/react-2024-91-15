import styles from "./styles.module.scss";
import { Dish } from "../Dish/component";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantMenu = ({ restaurantId, className }) => {
    const cx = classNames.bind(styles);
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    const menu = restaurant.menu;

    return menu ? (
        <div className={cx(styles.menu, styles[className])}>
            {menu.map((dishId) => (
                <Dish dishId={dishId} />
            ))}
        </div>
    ) : null;
};
