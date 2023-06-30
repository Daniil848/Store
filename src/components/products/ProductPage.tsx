import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useParams } from 'react-router-dom';
import { getSingleProduct } from "../../app/storeSlice";
import styles from "./ProductPage.module.scss";

interface IProps {
  id : number,
};

const ProductPage : FC<IProps> = (props) => {
  const state = useAppSelector(state => state.store);
  const dispatch = useAppDispatch();
  const {productID} = useParams();
  
  useEffect(() => {
    if (typeof productID === "string")
    dispatch(getSingleProduct(productID));
  },[dispatch, productID]);

  return (
    <>
      {state.loading === false && <div className={styles.product}>
        <div className={styles.productImgContainer}>
          <img src={state.product?.image} alt="product-img" className={styles.productImg}/>
        </div>
      </div>}
    </>
  );
};

export default ProductPage;