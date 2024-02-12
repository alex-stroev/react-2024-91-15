import styles from "./styles.module.scss";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";
import { selectIsLoading } from "../../redux/ui/request";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../../redux/entities/user/thunks/getUsers";

export const Review = ({ reviewID }) => {
    const [requestId, setRequestId] = useState();
    const review = useSelector((state) => selectReviewById(state, reviewID));

    const user = useSelector((state) => selectUserById(state, review.userId));
    const isLoading = useSelector((state) => requestId && selectIsLoading(state, requestId));

    const dispatch = useDispatch();
    useEffect(() => {
        setRequestId(dispatch(getUsers()).requestId);
    }, [dispatch, reviewID]);

    console.log(user);

    return (
        <div key={reviewID} className={styles.review}>
            <div className={styles.header}>
                <div className={styles.user}>
                    {isLoading ? (
                        "Wait..."
                    ) : (
                        <>
                            Автор: <b>{user && user.name}</b>
                        </>
                    )}
                </div>
                <div className={styles.rating}>Оценка: {review.rating}</div>
            </div>
            <div className={styles.text}>{review.text}</div>
        </div>
    );
};
