import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { recentlyViewed, getSingleProduct } from "../../app/storeSlice";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "./RecentlyViewedProducts.module.scss";

interface IProps {
  id : number,
}

const RecentlyViewedProducts : FC<IProps> = (props) => {
  const state = useAppSelector(state => state.store)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(props.id));
  },[dispatch]);

  useEffect(() => {
    if (state.product !== null) {
      dispatch(recentlyViewed(state.product));
      console.log('1',state.viewedProducts);
    } 
  },[dispatch]);

  console.log(state.viewedProducts);
  

  return (
    <>
      <div className={styles.products}>
        {state.viewedProducts.map((item, index) => (
          <Link to={`/product/${props.id}`}>

          </Link>
        ))}
      </div>
    </>
  );
};

export default RecentlyViewedProducts;