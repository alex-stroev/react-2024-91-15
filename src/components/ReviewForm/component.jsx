import { useContext } from "react";
import styles from "./styles.module.scss";
import { useReviewForm } from "./useReviewForm";
import { UserContext } from "../../contexts/user";

export const ReviewForm = () => {
    const { form, setText, setRating } = useReviewForm();
    // console.log(JSON.stringify(form, null, 2));
    const userFromContext = useContext(UserContext);

    return (
        <>
            {!!userFromContext.user && (
                <form className={styles.form}>
                    <div className={styles.row}>
                        {/* <label htmlFor="Name">Имя</label>
                        <input id="Name" type="text" value={form.name} onChange={(e) => setName(e)} /> */}
                        <b>{userFromContext.user.name}</b> ({userFromContext.user.email})
                    </div>
                    <div className={styles.row}>
                        <label htmlFor="Text">Текст</label>
                        <textarea id="Text" cols="30" rows="10" value={form.text} onChange={(e) => setText(e)}></textarea>
                    </div>
                    <label htmlFor="Rating">Рейтинг</label>
                    <div className={styles.row}>
                        <input id="Rating" type="number" min={1} max={5} value={form.rating} onChange={(e) => setRating(e)} />
                    </div>
                </form>
            )}
        </>
    );
};
