import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllCategories, getCategory } from "../../app/productsSlice";
import styles from "./SideBar.module.scss"

const SideBar : FC = () => {
  const state = useAppSelector(state => state.products)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch])
  

  return (
    <>
      <aside className={styles.sideBar}>
        <div className={styles.wrapper}>
          <p className={styles.sideBarTitle}>Categoties:</p>
          {state.categories.map((category, index) => (
            <ul className={styles.sideBarList} key={index}>
              <li>
                <button className={styles.sideBarListItem} onClick={() => dispatch(getCategory({category}))}>{category}</button>
              </li>
            </ul>
          ))}
        </div>
        {/* <div className={styles.wrapper}>
          <p className={styles.sideBarTitle}>Price:</p>
          <input type="range" step="0.5"  className={styles.sideBarListRange}/>
        </div> */}
      </aside>
    </>
  );
};

export default SideBar;
