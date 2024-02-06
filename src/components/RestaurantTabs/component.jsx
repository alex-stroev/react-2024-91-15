import styles from "./styles.module.scss";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { useSelector } from "react-redux";

export const RestaurantTabs = ({ onSelect, restaurantId, isCurrent }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    return (
        <button onClick={() => onSelect(restaurantId)} className={styles.tab} disabled={isCurrent}>
            {restaurant.name}
        </button>
    );
};
