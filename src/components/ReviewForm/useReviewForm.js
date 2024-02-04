import { useCallback, useReducer } from "react";

const initialValue = {
    name: "",
    text: "",
    rating: 1,
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        // case "setName":
        //     return { ...initialValue, name: payload };
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

    const setValue = useCallback((type, e) => dispatch({ type: type, payload: e.target.value }), []);

    // const setName = useCallback((e) => setValue("setName", e), [setValue]);
    const setText = useCallback((e) => setValue("setText", e), [setValue]);
    const setRating = useCallback((e) => setValue("setRating", e), [setValue]);

    return { form, setText, setRating };
};
