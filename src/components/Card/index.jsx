import { useState } from "react";
import styles from "./Card.module.scss";

export function Card({ imageUrl, title, price, onFavourite, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);

  const hangleClickPlus = () => {
    onPlus({ title, price, imageUrl })
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onFavourite}>
        <img
          src="/img/heart_unliked.svg"
          alt="heart"
          className={styles.favourite}
        />
      </div>

      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена: </span>
          <b> {price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={hangleClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt=""
        />
      </div>
    </div>
  );
}
