import { useState } from "react";
import { CartContainer } from "../Cart/container";

export const CartButton = ({ amount }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div onClick={() => setVisible(!visible)}>{amount}</div>
            {visible && <CartContainer />}
        </>
    );
};
