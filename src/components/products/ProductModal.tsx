import { FC } from "react";
import styles from "./ProductModal.module.scss"

const ProductModal : FC = () => {

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalSize}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <button></button>
              <h2></h2>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default ProductModal;