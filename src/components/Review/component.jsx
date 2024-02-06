import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";
export const Review = ({ reviewID }) => {
    const review = useSelector((state) => selectReviewById(state, reviewID));
    const user = useSelector((state) => selectUserById(state, review.userId));
    console.log(user);
    return (
        <div key={reviewID} className={styles.review}>
            <div className={styles.header}>
                <div className={styles.user}>
                    Автор: <b>{user.name}</b>
                </div>
                <div className={styles.rating}>Оценка: {review.rating}</div>
            </div>
            <div className={styles.text}>{review.text}</div>
        </div>
    );
};
