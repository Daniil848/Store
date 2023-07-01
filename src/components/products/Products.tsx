import React from "react";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllProducts, getSpecificCategory, toggleModal, getProductId} from "../../app/storeSlice";
import { Link } from 'react-router-dom';
import ProductModal from "./ProductModal";
import SideBar from "../sideBar/SideBar";
import styles from "./Products.module.scss";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products : FC = () => {
  const state = useAppSelector(state => state.store)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.category === null) {
      dispatch(getAllProducts()); 
    } else if (state.category !== null) {
      dispatch(getSpecificCategory(state.category))
    };
  }, [state.category,dispatch]);

  return (
    <>
      <div className={styles.products}>
        {state.products.map((item, index) => (
          <Link
            to={`/product/${item.id}`}
            className={styles.product}
            key={index}
            onClick={() => {dispatch(getProductId(item.id))}}
          >
            <button
              className={styles.productToggleModal} 
              onClick={(event) => {event.preventDefault(); dispatch(getProductId(item.id)); dispatch(toggleModal())}}
            ><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            <div className={styles.productImgContainer}>
              <img src={item.image} alt="product-img" className={styles.productImg}/>
            </div>
            <div className={styles.productInfo}>
              <p className={styles.productInfoTitle}>{item.title}</p>
              
              <div className={styles.productInfoBy}>
                <p className={styles.productInfoPrice}>${item.price}</p>
                <p className={styles.productInfoRating}>
                  <span className={styles.productInfoRatingRate}>{item.rating.rate}</span>
                  <span className={styles.productInfoRatingImg}><FontAwesomeIcon icon={faStar}/></span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {state.modal === true && <ProductModal id={state?.productId || 0}/>}
      <SideBar/>
    </>
  );
};

export default Products;