import styles from "./Grid.module.css";

const Grid = ({ children, gridRef }) => (
  <div ref={gridRef} className={styles.grid}>
    {children}
  </div>
);

export default Grid;
