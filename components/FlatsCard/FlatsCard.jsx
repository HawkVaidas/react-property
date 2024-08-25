
import styles from "./styles.module.css"

const FlatsCard = ({id, image, city, price, removeFlat}) => {
  return (
    <div onClick={() => {
      removeFlat(id);
    }}
    className={styles.flatsCard}>
      {image? (
        <img src={image} alt="flats photo"/>
     ):( <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" alt="flats photo"/>
     )}
        <h2>{city}</h2>
        <h3>{price}$</h3>
    </div>
  );
};

export default FlatsCard;