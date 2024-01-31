import styles from "./styles.module.scss";
export const ReviewForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor="Name">Имя</label>
                <input id="Name" type="text" />
            </div>
            <div className={styles.row}>
                <label htmlFor="Text">Текст</label>
                <textarea id="Text" cols="30" rows="10"></textarea>
            </div>
            <label htmlFor="Rating">Рейтинг</label>
            <div className={styles.row}>
                <input id="Rating" type="number" min={1} max={5} />
            </div>
        </form>
    );
};
