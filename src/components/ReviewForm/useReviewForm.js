import { useReducer } from "react";

const initialValue = {
    name: "",
    text: "",
    rating: 1,
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "setName":
            return { ...initialValue, name: payload };
        case "setText":
            return { ...state, text: payload };
        case "setRating":
            return { ...state, rating: payload };
        default:
            return state;
    }
};

export const useReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, initialValue);

    const setValue = (type, e) => dispatch({ type: type, payload: e.target.value });

    return { form, setValue };
};
