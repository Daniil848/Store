import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllProducts } from "../../app/storeSlice";
import styles from "./Products.module.scss"

const AllProducts : FC = () => {
  const state = useAppSelector(state => state.store)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());  
  }, [dispatch]);

  const products = state.products;

  return (
    <>
      <div className={styles.products}>
        {products.map((product, index) => (
          <div className={styles.product} key={index}>
            <div className={styles.productImgContainer}>
              <img src={product.image} alt="product-img" className={styles.productImg}/>
            </div>
            
            <div className={styles.productInfo}>
              
              <p className={styles.productInfoTitle}>{product.title}</p>
              <p className={styles.productInfoRating}>
                {product.rating.rate}<div className={styles.productInfoRatingImg}/>/{product.rating.count}
              </p>
              <div className={styles.productInfoBy}>
                <p className={styles.productInfoPrice}>${product.price}</p>
                <a href="" className={styles.productInfoLink}>Add to card</a>
              </div>
            </div>
          </div>  
        ))}
      </div>
    </>
  );
};

export default AllProducts;