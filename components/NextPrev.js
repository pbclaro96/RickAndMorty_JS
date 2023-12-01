import Styles from '../styles/NextPrev.module.css'
import Link from 'next/link'
const NextPrev = ({ character }) => {
    return (
        <div className={Styles.contenedor}>
            <Link href={`/`}>
                <button className={Styles.prev}>Prev</button>
            </Link>
            <Link href={`/`}>
                <button className={Styles.next}>Next</button>
            </Link>
        </div>
    )
}


export default NextPrev