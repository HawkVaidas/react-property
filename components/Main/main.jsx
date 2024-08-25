
import FlatsWrapper from "../FlatsWrapper/FlatsWrapper";
import styles from "./styles.module.css";

const Main = ({flats, setFlats}) => {
  return (
    <main className={styles.main}>
   <FlatsWrapper flats={flats} setFlats={setFlats}/>
    </main>
  );
};

export default Main;