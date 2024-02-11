import { useSelector } from "react-redux";
import { selectProductsAmount } from "../../redux/ui/cart";
import { CartButton } from "./component";

export const CartButtonContainer = () => {
    const amount = useSelector(selectProductsAmount);
    return <CartButton amount={amount} />;
};
