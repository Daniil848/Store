import { FC } from "react";
import styles from "./Product.module.scss"

interface IProps {
  id : number,
  title: string,
  price: number,
  description: string,
  image: string,
  category: string,
  rating : {
    rate : number,
    count : number,
  },
}

const Product : FC<IProps> = (props) => {
  return(
    <div className={styles.parent}>
      <img src={props.image} alt=""></img>
      <p>{props.price}</p>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.category}</p>
      <p>{props.rating.rate}\{props.rating.count}</p>
    </div>
  )
}

export default Product;