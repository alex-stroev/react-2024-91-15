import styles from "./styles.module.scss";

export const RestaurantTabs = ({ onclick, children, isCurrent }) => {
    return (
        <button onClick={() => onclick()} className={styles.tab} disabled={isCurrent}>
            {children}
        </button>
    );
};
