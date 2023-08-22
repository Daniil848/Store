import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { recentlyViewed } from "../../app/productsSlice";
import { Link } from "react-router-dom";
import { IProduct } from "../../app/productsSlice";
import Slider from "react-slick";
import styles from "./RecentlyViewedProducts.module.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface IProps {
  product : IProduct
}

const RecentlyViewedProducts : FC<IProps> = (props) => {
  const state = useAppSelector(state => state.products)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(recentlyViewed(props.product));
  },[dispatch, props.product]);

  const settings = {
    arrows : false,
    slidesToShow : 3,
    slidesToScroll : 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    dots : true,
  };

  if (state.viewedProducts.length > 2) {
    return (
      <div className={styles.products}>
        <p className={styles.title}>Recently viewed products</p>
        <Slider {...settings}>
          {state.viewedProducts.map((item, index) => ( 
            <div key={index}>
              <Link to={`/product/${item.id}`} className={styles.product}>
                <div className={styles.productImgContainer}>
                  <img src={item.image} alt="produt-img" className={styles.productImg}/>
                </div>
                <div className={styles.description}>
                  <p className={styles.productTitle}>{item.title}</p>
                  <div className={styles.descriptionBuy}>
                    <p className={styles.price}>${item.price}</p>
                    <button className={styles.button}>Buy</button>
                  </div>
                </div>
              </Link>
            </div> 
          ))} 
        </Slider>
      </div>
    );
  } else {
    return null
  };
};

export default RecentlyViewedProducts;