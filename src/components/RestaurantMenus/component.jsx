import styles from "./styles.module.scss";

export const RestaurantMenus = ({ menu }) => {
    return menu ? (
        <div className={styles.menu}>
            <h3>Меню:</h3>
            {menu.map((item) => {
                return (
                    <div className={styles.dish}>
                        <div className={styles.header}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.price}>{item.price}$</div>
                        </div>
                        {item.ingredients && (
                            <div className={styles.ingredients}>
                                <div>
                                    <b> Ингредиенты:</b>
                                </div>
                                {item.ingredients.map((fff) => {
                                    return <div>{fff}</div>;
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    ) : null;
};
