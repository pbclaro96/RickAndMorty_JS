import Styles from '../styles/NextPrev.module.css'
import Link from 'next/link'
const NextPrev = ({ character }) => {
    return (
        <div className={Styles.contenedor}>
            <button className={Styles.prev}>Prev</button>
            <button className={Styles.next}>Next</button>
        </div>
    )
}


export default NextPrev