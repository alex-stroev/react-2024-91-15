import styles from "./styles.module.scss";
import { Review } from "../Review/component";
import { ReviewForm } from "../ReviewForm/component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getReviews } from "../../redux/entities/review/thunks/getReviews";
import { selectIsLoading } from "../../redux/ui/request";
import { selectReviewIds } from "../../redux/entities/review/selectors";

export const RestaurantReviews = ({ restaurantId }) => {
    const [requestId, setRequestId] = useState();
    const isLoading = useSelector((state) => requestId && selectIsLoading(state, requestId));

    const reviewsIds = useSelector((state) => selectReviewIds(state, restaurantId));

    const dispatch = useDispatch();
    useEffect(() => {
        setRequestId(dispatch(getReviews(restaurantId)).requestId);
    }, [dispatch, restaurantId]);

    return (
        <div>
            {isLoading ? "in process" : reviewsIds && reviewsIds.map((reviewID) => <Review key={reviewID} reviewID={reviewID} />)} <ReviewForm />
        </div>
    );
};
