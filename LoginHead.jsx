import styles from "./LoginHead.mod.css";
import { Link } from "react-router-dom";

export const LoginPageHeader = () => {
    return (
        <div className={styles.loginHead}>
            <div className={styles.title}>
                <div className={styles.name}>ARMAGGEDON V</div>
                <div className={styles.description}>
                    Сервис мониторинга и уничтожения астероидов, подлетающих к Земле на критичекое растояние.
                </div>
            </div>

            <div className={styles.linksFit}>
                <div className={styles.links}>
                    <Link
                        to={"/"}
                        style={{
                            color: "black",
                        }}
                    >
                        Астероиды
                    </Link>
                    <Link
                        to={"/toDestroy"}
                        style={{ color: "black", marginLeft: "20px" }}
                    >
                        Ликвидация
                    </Link>
                </div>
                <Link
                    to={"/login"}
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                    }}
                >
                    Войти
                </Link>
            </div>
        </div>
    );
};