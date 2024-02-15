import { Dish } from "../Dish/component";

export const Cart = ({ productsIds }) => {
    return productsIds?.length ? productsIds.map((productId) => <Dish dishId={productId} key={productId} />) : "Empty";
};
