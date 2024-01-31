import styles from "./styles.module.scss";
export const Button = ({ children, onclick, disabled }) => {
    return (
        <button onClick={onclick} disabled={disabled} className={styles.button}>
            {children}
        </button>
    );
};
