import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleModal, getProductId} from "../../app/storeSlice";
import { IProduct } from "../../app/storeSlice";
import { Link } from 'react-router-dom';
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Product.module.scss";

const Product : FC<IProduct> = (props) => {
  const state = useAppSelector(state => state.store)
  const dispatch = useAppDispatch();

  return (
    <>
      <Link
        to={`/product/${props.id}`}
        className={styles.product}
        onClick={() => {dispatch(getProductId(props.id))}}
      >
        <button
          className={styles.productToggleModal} 
          onClick={(event) => {event.preventDefault(); dispatch(getProductId(props.id)); dispatch(toggleModal())}}
        ><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        <div className={styles.productImgContainer}>
          <img src={props.image} alt="product-img" className={styles.productImg}/>
        </div>
        <div className={styles.productInfo}>
          <p className={styles.productInfoTitle}>{props.title}</p>
          
          <div className={styles.productInfoBy}>
            <p className={styles.productInfoPrice}>${props.price}</p>
            <p className={styles.productInfoRating}>
              <span className={styles.productInfoRatingRate}>{props.rating.rate}</span>
              <span className={styles.productInfoRatingImg}><FontAwesomeIcon icon={faStar}/></span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;