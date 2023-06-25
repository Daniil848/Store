import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { toggleModal } from "../../app/storeSlice";
import { IProduct } from "../../app/storeSlice";
import styles from "./ProductModal.module.scss";

const ProductModal : FC<IProduct> = (props) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
            <button className={styles.modalClose} onClick={() => dispatch(toggleModal())}></button>
            <div className={styles.modalBody}>
              <div className={styles.modalBodyImgContainer}>
                <img src={props.image} alt="productImg"  className={styles.modalBodyImg}/>
              </div>
              <div className={styles.modalBodyContent}>
                <h2 className={styles.modalBodyContentTitle}>{props.title}</h2>
                <p className={styles.modalBodyContentDescription}>{props.description}</p>
                <div className={styles.modalBodyContentRating}>
                  <div className={styles.modalBodyContentImg}></div>
                  <p className={styles.modalBodyContentRatingRate}>{props.rating.rate}</p>
                  <span className={styles.modalBodyContentRatingMarker}></span>
                  <p className={styles.modalBodyContentRatingCount}>{props.rating.count} reviews</p>
                </div>
                <p className={styles.modalBodyContentPrice}>${props.price}</p>
                <div className={styles.modalBodyContentButtons}>
                  <button className={styles.button}>Go to the page</button>
                  <button className={styles.button}>Add to card</button>
                </div>
              </div>
            </div>
      </div>
      </div>
    </>
  )
};

export default ProductModal;