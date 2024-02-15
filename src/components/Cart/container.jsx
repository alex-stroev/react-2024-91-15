import { useSelector } from "react-redux";
import { Cart } from "./component";
import { selectCartProductsIds } from "../../redux/ui/cart";

export const CartContainer = () => {
    const productsIds = useSelector(selectCartProductsIds);
    return <Cart productsIds={productsIds} />;
};
