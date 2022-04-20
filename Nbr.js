import styles from './Nbr.mod.css'

const Nbr = () => {
    return (
        <div className={styles.nbr}>
            <nav className={styles.upperblock}>
                <div className={styles.label}>ARMAGEDDON</div>
                <div className={styles.links}>
                    <a className={styles.home} href="/">Астероиды</a>
                    <a className={styles.Takk} href="/Takk">Уничтожение</a>
                </div>
            </nav>
            <div className={styles.lowerblock}>Сервис мониторинга и ликвидации астероидов,<br></br>опасно подлетающих к Земле.</div>
        </div>
    );
}
export default Nbr;