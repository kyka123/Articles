import styles from "./Grid.module.css";


const Grid = ({children}) => (
     <div className={styles.grid}>{children}</div>
)

export default Grid