import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { recentlyViewed } from "../../app/productsSlice";
import { Link } from "react-router-dom";
import { IProduct } from "../../app/productsSlice";
import styles from "./RecentlyViewedProducts.module.scss";

interface IProps {
  product : IProduct
}

const RecentlyViewedProducts : FC<IProps> = (props) => {
  const state = useAppSelector(state => state.store)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(recentlyViewed(props.product));
  },[dispatch, props.product]);

  console.log(state.viewedProducts);

  return (
    <div className={styles.content}>
      {state.viewedProducts.map((item, index) => ( 
        <Link
          to={`/product/${item.id}`}
          className={styles.product}
          key={index}
        >
          <div className={styles.productImgContainer}>
            <img src={item.image} alt="produt-img" className={styles.productImg}/> 
          </div>
          <div className={styles.description}>
            <p>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentlyViewedProducts;