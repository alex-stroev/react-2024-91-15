import styles from "./styles.module.scss";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { useSelector } from "react-redux";

export const RestaurantTabs = ({ onSelect, id, isCurrent }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id));
    return (
        <button onClick={() => onSelect(id)} className={styles.tab} disabled={isCurrent}>
            {restaurant.name}
        </button>
    );
};
