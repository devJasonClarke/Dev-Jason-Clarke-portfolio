import useMousePosition from "hooks/useMousePosition";
import styles from "./Cursor.module.scss";

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  return (
    <div
      id={styles.cursor}
      style={{
        position: "fixed",
        left: clientX,
        top: clientY,
      }}
    ></div>
  );
};
export default Cursor;
