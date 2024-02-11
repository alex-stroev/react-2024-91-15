import { useEffect, useState } from "react";
import { Restaurant } from "../Restaurant/component";
import styles from "./styles.module.scss";
import { RestaurantTabs } from "../RestaurantTabs/component";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { CartButtonContainer } from "../CartButton/container";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/getRestaurants";
import { selectIsLoading } from "../../redux/ui/request";

export const Restaurants = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();
    const restaurantsIDs = useSelector(selectRestaurantIds);
    const [requestId, setRequestId] = useState();
    const isLoading = useSelector((state) => requestId && selectIsLoading(state, requestId));

    const dispatch = useDispatch();
    useEffect(() => {
        setRequestId(dispatch(getRestaurants()).requestId);
    }, [dispatch, activeRestaurantId]);

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <h1>Список ресторанов</h1>
                    <CartButtonContainer />
                    <nav className={styles.nav}>
                        {restaurantsIDs.map((restaurantId) => (
                            <RestaurantTabs isCurrent={restaurantId === activeRestaurantId} onSelect={setActiveRestaurantId} restaurantId={restaurantId} />
                        ))}
                    </nav>

                    {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
                </>
            )}
        </div>
    );
};
