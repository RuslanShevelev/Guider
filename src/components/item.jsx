import React from "react";
import styles from "./item.module.scss";
import { useHover } from "../hooks/hover";
import { useGetInfoMutation } from "../appService";

export const BlockItem = ({ id, img, title, text }) => {
  const [hoverRef, isHovered] = useHover();
  const [getMoreInfo] = useGetInfoMutation();
  return (
    <li className={styles.item} ref={hoverRef}>
      <div className={styles.item__content}>
        <div className={styles.item__image}>
          <img src={require(`../../public/images/${img}`)} alt={img} />
        </div>
        <div className={styles.item__title}>{title}</div>
        {isHovered && (
          <>
            <div className={styles.item__text}>{text}</div>
            <button
              className={styles.item__button}
              onClick={() => getMoreInfo({ id })}
            >
              ПОДРОБНЕЕ →
            </button>
          </>
        )}
      </div>
    </li>
  );
};
