import largeasteroid from "../assets/largeasteroid.svg";
import mediumasteroid from "../assets/mediumasteroid.svg";
import smallasteroid from "../assets/smallasteroid.svg";
import styles from "../CardsArray/CardsArray.module.css";
import dino from "../assets/dino.svg";

const Tekk = ({props}) => {

 // console.log("Tekk");
  console.log(props);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit.');
  }
  let asteroidsrc;
    if (props.size > 450) asteroidsrc = largeasteroid;
      else if (props.size > 99) asteroidsrc = mediumasteroid;
        else asteroidsrc = smallasteroid;
  let tekkstyle;
     if (props.isDangerous) tekkstyle = styles.dangerousCard;
      else tekkstyle = styles.harmlessCard;
  return (
      <div className={tekkstyle}>
        <div className={styles.leftblock}>
          <img className={styles.asteroid} src={asteroidsrc}></img>
          <img className={styles.dino} src={dino}></img>
        </div>
        <div className={styles.centerblock}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.data}>
            <div>Размер объекта: {props.size} в метрах </div>
            <div>Расстояние от его расположения: {props.distance} в километрах</div>
            <div>Дата: {props.date}(на амереканский лад)</div>
          </div>
        </div>
        <div className={styles.rightblock}>
          <div>
            <div>Оценка:</div>
                {(props.isDangerous) ?
                <div className={styles.grade}>Опасность</div> :
                <div className={styles.grade}>Нет опасности</div>}
          </div>
          <div>
            <form onSubmit={handleSubmit}><button className={styles.submit} type="submit">Уничтожить</button></form>
          </div>
        </div>
      </div>
  )
}
export default Tekk;
