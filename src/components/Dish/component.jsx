import styles from "./styles.module.scss";
import { Button } from "../Button/component";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { cartActions, selectProductAmountById } from "../../redux/ui/cart";
import { useDispatch, useSelector } from "react-redux";

export const Dish = ({ dishId }) => {
    const dish = useSelector((state) => selectDishById(state, dishId));
    const amount = useSelector((state) => selectProductAmountById(state, dishId));
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(cartActions.increment(dishId));
    };
    const decrement = () => {
        dispatch(cartActions.decrement(dishId));
    };
    return (
        <div className={styles.dish}>
            <div className={styles.header}>
                <div className={styles.name}>{dish.name}</div>
                <div className={styles.price}>{dish.price}$</div>
            </div>

            <div className={styles.counter}>
                <Button onclick={decrement}>-</Button>
                <b>{amount}</b>
                <Button onclick={increment}>+</Button>
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
