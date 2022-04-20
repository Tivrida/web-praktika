import styles from './TekksArray.module.css'
import Card from '../Tekk/Tekk'
import Tekk from "./App.test";

const TekksArray = ({propsArray}) => {
    let TekksComponents = [];
    propsArray.forEach(props => TekksComponents.push(<Tekk props={props}/>));

    return(
        <div>
            {TekksComponents}
        </div>
    );
}

export default TekksArray;