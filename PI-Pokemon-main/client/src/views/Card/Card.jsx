import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/action/action";
import styles from "./Card.module.css";
import CardContainer from "../../components/Card_container/CardContainer";

function Card() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    // console.log(dispatch(getPokemons()));
  }, [dispatch]);
  return (
    <div>
      <div>Cards</div>
      <div className={styles.cardDetail}>
        <CardContainer />
      </div>
    </div>
  );
}
export default Card;
