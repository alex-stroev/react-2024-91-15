import styles from "./styles.module.scss";
import { Review } from "../Review/component";

export const RestaurantReviews = ({ reviews }) => {
    return reviews ? (
        <div className={styles.reviews}>
            {reviews.map((review) => {
                return <Review review={review} />;
            })}
        </div>
    ) : null;
};
