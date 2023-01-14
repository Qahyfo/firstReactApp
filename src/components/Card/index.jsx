import { useState } from "react";
import styles from "./Card.module.scss";

export function Card(props) {
  const [isAdded, setIsAdded] = useState(false);

  const hangleClickPlus = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <img
        src="/img/heart_unliked.svg"
        alt="heart"
        className={styles.favourite}
      />
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена: </span>
          <b> {props.price}</b>
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
