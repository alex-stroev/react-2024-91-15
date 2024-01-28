import styles from "./styles.module.scss";
import { Dish } from "../Dish/component";
import classNames from "classnames";

export const RestaurantMenu = ({ menu, className }) => {
    const cx = classNames.bind(styles);

    return menu ? (
        <div className={cx(styles.menu, styles[className])}>
            {menu.map((dish) => (
                <Dish dish={dish} />
            ))}
        </div>
    ) : null;
};
