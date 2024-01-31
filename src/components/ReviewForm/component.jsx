import styles from "./styles.module.scss";
import { useReviewForm } from "./useReviewForm";
export const ReviewForm = () => {
    const { form, dispatch } = useReviewForm();
    console.log(form);
    return (
        <form className={styles.form}>
            <div className={styles.row}>
                <label htmlFor="Name">Имя</label>
                <input id="Name" type="text" value={form.name} onChange={(e) => dispatch({ type: "setName", payload: e.target.value })} />
            </div>
            <div className={styles.row}>
                <label htmlFor="Text">Текст</label>
                <textarea id="Text" cols="30" rows="10" value={form.text} onChange={(e) => dispatch({ type: "setText", payload: e.target.value })}></textarea>
            </div>
            <label htmlFor="Rating">Рейтинг</label>
            <div className={styles.row}>
                <input id="Rating" type="number" min={1} max={5} value={form.rating} onChange={(e) => dispatch({ type: "setRating", payload: Number(e.target.value) })} />
            </div>
        </form>
    );
};
