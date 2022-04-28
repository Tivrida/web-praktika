import {Link} from 'react-router-dom';

export function Destroy () {
    document.title=`Ликвидация`;

    return (
        <>
            <Link id="destruction" to="/">Астероиды</Link>
            <label id="asteroids">Ликвидация</label>
        </>
    );
}