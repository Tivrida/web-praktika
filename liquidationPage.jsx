import { useContext } from "react"
import { LiquidationPageHeader } from "./LiquidationPageHead/LiquidationPageHead"
import styles from "./LiquidationPage.mod.css"
import { AsteroidCardList } from "../AsteroidCardList/AsteroidCardList"
import { AsteroidsContext } from "../App"
import { Navbar } from "../Navbar/Navbar"

export const LiquidationPage = () =>{
    const {state, dispatch} = useContext(AsteroidsContext)

    return <div className={styles.LiquidationPage}>
        <LiquidationPageHeader />
        <div className={styles.line} />
        <Navbar showMode={state.showMode} distanceMode={state.distanceMode} dispatch={dispatch} />
        <AsteroidCardList list={state.LiquidationList} />
    </div>
}
