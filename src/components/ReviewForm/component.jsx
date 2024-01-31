import styles from "./styles.module.scss";
import { useReviewForm } from "./useReviewForm";
export const ReviewForm = () => {
    const { form, setValue } = useReviewForm();
    console.log(JSON.stringify(form, null, 2));
    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor="Name">Имя</label>
                <input id="Name" type="text" value={form.name} onChange={(e) => setValue("setName", e)} />
            </div>
            <div className={styles.row}>
                <label htmlFor="Text">Текст</label>
                <textarea id="Text" cols="30" rows="10" value={form.text} onChange={(e) => setValue("setText", e)}></textarea>
            </div>
            <label htmlFor="Rating">Рейтинг</label>
            <div className={styles.row}>
                <input id="Rating" type="number" min={1} max={5} value={form.rating} onChange={(e) => setValue("setRating", e)} />
            </div>
        </form>
    );
};
