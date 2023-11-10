import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllCategories, resetFilter, setCategory } from "../../app/productsSlice";
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
                <button 
                className={styles.sideBarListItem}
                onClick={() => dispatch(setCategory({category}))}
                >
                  {category}
                </button>
              </li>
            </ul>
          ))}
          <button onClick={() => dispatch(resetFilter())}>reset filter</button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
