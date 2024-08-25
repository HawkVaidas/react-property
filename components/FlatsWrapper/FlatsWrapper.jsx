
import styles from "./styles.module.css";
import FlatsCard from "../FlatsCard/FlatsCard";
import Spinner from "../Spinner/spinner";


const FlatsWrapper = ({flats, setFlats}) => {
 const removeFlat = (id) => {
  const filteredFlat = flats.filter((f) => f.id!==id)
  setFlats(filteredFlat);
 };
  return (
    <div className={styles.flatsWrapper}>
      {flats ? (
      flats.map((d) => {
    return ( <FlatsCard 
        key={d.id}
        id={d.id}
        image={d.image}
        city={d.city}
        price={d.price}
        removeFlat={removeFlat}
        />
        );
      })
      ):(
      <Spinner/>
    )}
    </div>
  );
};

export default FlatsWrapper;