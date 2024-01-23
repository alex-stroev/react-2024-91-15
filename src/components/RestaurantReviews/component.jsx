import styles from "./styles.module.scss";

export const RestaurantReviews = ({ reviews }) => {
    return reviews ? (
        <div className={styles.reviews}>
            <h3>Отзывы:</h3>
            {reviews.map((item) => {
                return (
                    <div key={item.id} className={styles.review}>
                        <div className={styles.header}>
                            <div className={styles.user}>Автор: <b>{item.user}</b></div>
                            <div className={styles.rating}>Оценка: {item.rating}</div>
                        </div>
                        <div className={styles.text}>{item.text}</div>
                    </div>
                );
            })}
        </div>
    ) : null;
};
