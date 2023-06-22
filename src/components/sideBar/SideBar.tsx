import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllCategories,getCategory } from "../../app/storeSlice";
import styles from "./SideBar.module.scss"

const SideBar : FC = () => {
  const state = useAppSelector(state => state.store)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch])
  

  return (
    <>
      <aside className={styles.sideBar}>
        <div className={styles.wrapper}>
          {state.categories.map((category, index) => (
            <ul className={styles.sideBarList} key={index}>
              <li>
                <button className={styles.sideBarListItem} onClick={() => dispatch(getCategory({category}))}>{category}</button>
              </li>
            </ul>
          ))}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
