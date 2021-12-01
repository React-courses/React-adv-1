import {useEffect, useRef, useState} from "react";
import {InitialValues, onChangeArgs, Product} from "../interfaces/ProductInterfaces";


interface useProductArgs {
    product: Product,
    onChange?: (args:onChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    // console.log(initialValues)
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        if(initialValues?.maxCount)
            if(counter === initialValues?.maxCount) return;
        const newValue = Math.max(counter + value, 0);

        // Código de fernando para lo de arriba, quizá es más eficáz.
        // if(initialValues?.maxCount){
        //     newValue = Math.min(newValue, initialValues.maxCount);
        // }

        setCounter(newValue);
        onChange && onChange({product, count: newValue});

    };

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);



    return {
        counter,
        increaseBy,
        reset,
        maxCount: initialValues?.maxCount,
        isMaxCountReach: !!initialValues?.count && initialValues.maxCount === counter,
    }
}
