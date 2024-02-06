import styles from "./styles.module.scss";
import { Review } from "../Review/component";
import { ReviewForm } from "../ReviewForm/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { useSelector } from "react-redux";

export const RestaurantReviews = ({ restaurantId }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
    const reviews = restaurant.reviews;
    return (
        <div>
            {reviews ? (
                <div className={styles.reviews}>
                    {reviews.map((reviewID) => {
                        return <Review reviewID={reviewID} />;
                    })}
                </div>
            ) : null}
            <ReviewForm />
        </div>
    );
};
