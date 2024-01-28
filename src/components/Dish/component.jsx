import styles from "./styles.module.scss";
import { Button } from "../Button/component";
import { useState } from "react";

export const Dish = ({ dish }) => {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className={styles.dish}>
            <div className={styles.header}>
                <div className={styles.name}>{dish.name}</div>
                <div className={styles.price}>{dish.price}$</div>
            </div>

            <div className={styles.counter}>
                <Button disabled={quantity <= 0} onclick={() => setQuantity(quantity - 1)}>
                    -
                </Button>
                <b>{quantity}</b>
                <Button disabled={quantity >= 5} onclick={() => setQuantity(quantity + 1)}>
                    +
                </Button>
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
