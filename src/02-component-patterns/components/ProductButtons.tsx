import React, {useContext} from "react";
import styles from "../styles/styles.module.css";
import {productContext} from "./ProductCard";

export const ProductButtons = () => {

    const { counter, increaseBy } = useContext(productContext);

    return(
        <div className={styles.buttonsContainer}>
            <button
                onClick={() => increaseBy(-1)}
                className={styles.buttonMinus}>-</button>

            <div className={styles.countLabel}> {counter} </div>

            <button
                onClick={() => increaseBy(1)}
                className={styles.buttonAdd}>+</button>
        </div>
    )
}
