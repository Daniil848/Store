import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllProducts, getSingleProduct, getSpecificCategory,toggleModal} from "../../app/storeSlice";
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

  const handleModal = (id : number) => {
    dispatch(getSingleProduct(id));
    dispatch(toggleModal());
  };

  const product = state.product || null;

  console.log(state.product); 

  return (
    <>
      <div className={styles.products}>
        {state.products.map((item, index) => (
          <div className={styles.product} key={index}>
            <div className={styles.productImgContainer}>
              <button className={styles.productToggleModal} onClick={() => handleModal(item.id)}></button>
              <img src={item.image} alt="product-img" className={styles.productImg}/>
            </div>
            
            <div className={styles.productInfo}>
              
              <p className={styles.productInfoTitle}>{item.title}</p>
              <p className={styles.productInfoRating}>
                {item.rating.rate}<div className={styles.productInfoRatingImg}/>
              </p>
              <div className={styles.productInfoBy}>
                <p className={styles.productInfoPrice}>${item.price}</p>
                <a href="#" className={styles.productInfoLink}>Add to card</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {state.modal === true && <ProductModal
        id={product?.id || 0}
        title={product?.title || ""}
        price={product?.price || 0}
        description={product?.description || ""}
        image={product?.image || ""}
        category={product?.category || ""}
        rating={{ rate: product?.rating.rate || 0, count: product?.rating.count || 0}}
      />}
    </>
  );
};

export default Products;