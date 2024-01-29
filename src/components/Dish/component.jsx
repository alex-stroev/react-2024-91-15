import styles from "./styles.module.scss";
export const Dish = ({ dish }) => {
    return (
        <div className={styles.dish}>
            <div className={styles.header}>
                <div className={styles.name}>{dish.name}</div>
                <div className={styles.price}>{dish.price}$</div>
            </div>
            {dish.ingredients && (
                <div className={styles.ingredients}>
                    <div>
                        <b> Ингредиенты:</b>
                    </div>
                    {dish.ingredients.map((ingredient) => {
                        return <div>{ingredient}</div>;
                    })}
                </div>
            )}
        </div>
    );
};
