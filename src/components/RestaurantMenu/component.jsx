import styles from "./styles.module.scss";
import { Dish } from "../Dish/component";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { getDishes } from "../../redux/entities/dish/thunks/getDishes";
import { selectIsLoading } from "../../redux/ui/request";
import { selectDishIds } from "../../redux/entities/dish/selectors";

export const RestaurantMenu = ({ restaurantId, className }) => {
    const cx = classNames.bind(styles);
    const [requestId, setRequestId] = useState();
    const isLoading = useSelector((state) => requestId && selectIsLoading(state, requestId));

    const dishesIds = useSelector((state) => selectDishIds(state, restaurantId));

    const dispatch = useDispatch();
    useEffect(() => {
        setRequestId(dispatch(getDishes(restaurantId)).requestId);
    }, [dispatch, restaurantId]);

    // Надо бы настройки prettier подновить
    return <>{isLoading ? "loading" : <div className={cx(styles.menu, styles[className])}>{dishesIds && dishesIds.map((dishId) => <Dish key={dishId} dishId={dishId} />)}</div>}</>;
};
