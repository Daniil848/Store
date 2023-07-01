import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getSingleProduct, toggleModal } from "../../app/storeSlice";
import styles from "./ProductModal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  id : number,
}

const ProductModal : FC<IProps> = (props) => {
  const state = useAppSelector(state => state.store)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(props.id));
  },[dispatch, props.id]);


  if (state.loading === true || state.product === null) return null;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <button className={styles.modalClose} onClick={() => dispatch(toggleModal())}><FontAwesomeIcon icon={faXmark}/></button>
          <div className={styles.modalBody}>
            <div className={styles.modalBodyImgContainer}>
              <img src={state.product.image} alt="productImg" className={styles.modalBodyImg}/>
            </div>
            <div className={styles.modalBodyContent}>
              <h2 className={styles.modalBodyContentTitle}>{state.product.title}</h2>
              <p className={styles.modalBodyContentDescription}>{state.product.description}</p>
              <div className={styles.modalBodyContentRating}>
                <div className={styles.modalBodyContentRatingImg}><FontAwesomeIcon icon={faStar}/></div>
                <p className={styles.modalBodyContentRatingRate}>{state.product.rating.rate}</p>
                <span className={styles.modalBodyContentRatingMarker}></span>
                <p className={styles.modalBodyContentRatingCount}>{state.product.rating.count} reviews</p>
              </div>
              <p className={styles.modalBodyContentPrice}>${state.product.price}</p>
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