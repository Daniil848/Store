import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllCategories } from "../../app/storeSlice";
import styles from "./SideBar.module.scss"

const SideBar : FC = () => {
  const state = useAppSelector(state => state.store)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch])

  console.log(state.categories);
  

  return (
    <>
      <aside className={styles.sideBar}>
        <div className={styles.wrapper}>
          {state.categories.map((category, index) => (
            <ul className={styles.sideBarList} key={index}>
              <li className={styles.sideBarListItem}>
                <input type="checkbox" className={styles.sideBarListItemCheckBox}></input>{category}
              </li>
            </ul>
          ))}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
