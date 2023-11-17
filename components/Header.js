import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
const Header = () => {
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href="/" className={styles.logo}>
                        <Image  width={400} height={130} src="/img/letrasrm.png" alt="logo" />
                    </Link>
                    <div className={styles.navegacion}>
                        <Image  width={200} height={200} src="/img/rickymorty.png" alt="logo" />
                    </div>

                </div>
            </div>
        </header>
    )
}


export default Header

