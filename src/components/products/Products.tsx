import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllProducts , getSpecificCategory } from "../../app/storeSlice";
import styles from "./Products.module.scss";
import ProductModal from "./ProductModal";

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
        {state.products.map((product, index) => (
          <div className={styles.product} key={index}>
            <div className={styles.productImgContainer}>
              <button className={styles.productToggleModal}></button>
              <img src={product.image} alt="product-img" className={styles.productImg}/>
            </div>
            
            <div className={styles.productInfo}>
              
              <p className={styles.productInfoTitle}>{product.title}</p>
              <p className={styles.productInfoRating}>
                {product.rating.rate}<div className={styles.productInfoRatingImg}/>
              </p>
              <div className={styles.productInfoBy}>
                <p className={styles.productInfoPrice}>${product.price}</p>
                <a href="" className={styles.productInfoLink}>Add to card</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProductModal/>
    </>
  );
};

export default Products;