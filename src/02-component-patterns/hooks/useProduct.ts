import {useState} from "react";


// interface CounterValues {
//     counter: number
// }

export const useProduct = (value: number = 0) => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter(prevState => Math.max(prevState + value, 0));
    };

    return {
        counter,
        increaseBy
    }
}
