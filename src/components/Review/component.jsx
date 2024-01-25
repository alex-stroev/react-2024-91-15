import styles from "./styles.module.scss";
export const Review = ({ review }) => {
    return (
        <div key={review.id} className={styles.review}>
            <div className={styles.header}>
                <div className={styles.user}>
                    Автор: <b>{review.user}</b>
                </div>
                <div className={styles.rating}>Оценка: {review.rating}</div>
            </div>
            <div className={styles.text}>{review.text}</div>
        </div>
    );
};
