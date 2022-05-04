import styles from './liquidationPageHead.mod.css'
import { Link } from 'react-router-dom';


export const liquidationPageHead = () => {
    return <div className={styles.homeHead}>
        <div className={styles.title}>
            <div className={styles.name}>ARMAGGEDON V</div>
            <div className={styles.description}>Сервис отслеживания и уничтожения астероидов</div>
        </div>

        <div className={styles.links}>
            <Link to={'/'} style={{ color: "black"}}>Астероиды</Link>
            <Link to={'/toDestroy'} style={{ textDecoration: 'none', color: "black", fontWeight: "bold"}}>Уничтожение</Link>
        </div>
    </div>
}