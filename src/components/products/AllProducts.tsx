import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllProducts } from "../../app/storeSlice";
import Product from "./Product";

const AllProducts : FC = () => {
  const state = useAppSelector(state => state.store)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());  
  }, [dispatch]);

  const products = state.products;

  return (
    <>
      <div>
        {products.map((product, index) => (
          <Product
            id={product.id} 
            title={product.title} 
            price={product.price} 
            description={product.description} 
            image={product.image}
            category={product.category}
            rating={{
              rate : product.rating.rate,
              count : product.rating.count
            }}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default AllProducts;