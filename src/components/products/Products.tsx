import React from "react";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllProducts, getSpecificCategory } from "../../app/productsSlice";
import Product from "./Product";
import ProductModal from "./ProductModal";
import SideBar from "../sideBar/SideBar";
import styles from "./Products.module.scss";


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
          <Product
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
            image={item.image}
            rating={{rate: item.rating.rate, count: item.rating.count}}
            key={index}
          />
        ))}
      </div>
      {state.modal === true && <ProductModal id={state?.productId || 0}/>}
      <SideBar/>
    </>
  );
};

export default Products;