import React from 'react'
import '../index.css'
import styles from './HLL.mod.css'
import TakksArray from "../TakksArray/TakksArray"

const HLL = () =>
{
const [dangerousOnly, setDangerousOnly] = React.useState(false);
const handleCheckboxChange = () => {setDangerousOnly(!dangerousOnly);};
const [units, setUnits] = React.useState('km');
const handleUnitsChange = () =>
{
        if (units === 'km')
            setUnits('moons');
        else
            setUnits('km');
    }
const getPropsForAllAsteroids = () =>
        ([
            {
                name: "2021 FQ",
                date: "09. 12. 2021",
                distance: 7235024,
                size: 85,
                isDangerous: false,
            },
            {
                name: "2021 ER",
                date: "11. 02. 2021",
                distance: 9331775,
                size: 300,
                isDangerous: false,
            },
            {
                name: "2022 QQ",
                date: " 03. 03.  2022",
                distance: 2866012,
                size: 850,
                isDangerous: true,
            },
            {
                name: "2022 QW",
                date: "03. 04. 2022",
                distance: 2866012,
                size: 850,
                isDangerous: true,
            },
        ]);
const getPropsForDangerousAsteroids = () =>
        ([
            {
                name: "2022 QQ",
                date: "03. 03. 2022",
                distance: 2866012,
                size: 850,
                isDangerous: true,
            },
            {
                name: "2022 QW",
                date: "03. 04. 2022",
                distance: 2866012,
                size: 850,
                isDangerous: true,
            },
        ]);
const propsForAllAsteroids = getPropsForAllAsteroids();
const propsForDangerousAsteroids = getPropsForDangerousAsteroids();

    return (
        <div>
            <div className={styles.input}>
                <div className={styles.checkbox}>
                    <Checkbox
                        label=" Только опасные"
                        value={dangerousOnly}
                        onChange={handleCheckboxChange}
                    />
                </div><div className={styles.distancechoice}><DistanceChoice choice={'km'}/></div></div>
            <div>
                {dangerousOnly ?
                    <TakksArray propsArray={propsForDangerousAsteroids}/> :
                    <TakksArray propsArray={propsForAllAsteroids}/> }
            </div>
        </div>
    );
};

const Checkbox = ({ label, value, onChange }) =>
{
    return (<label><input type="checkbox" checked={value} onChange={onChange} />{label}</label>);
}

const DistanceChoice = ({ choice }) => {
    if (choice === 'km')
        return(
            <div>
                <span>Расстояние&nbsp;</span><span className={styles.chosen}>в километрах,&nbsp;</span>
                <span className={styles.notchosen}>дистанция до луны</span>
            </div>
        )
    else if (choice === 'moons')
        return(
            <div>
                <span>Расстояние&nbsp;</span>
                <span className={styles.notchosen}>в километрах,&nbsp;</span>
                <span className={styles.chosen}>дистанция до  луны</span>
            </div>
        )
}
export default HLL;