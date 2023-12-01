import Link from 'next/link'
import Styles from '../styles/Header.module.css'
import Image from 'next/image'
import Nav from './Nav'
const Header = () => {
    return (
        <header className={Styles.header}>
            <div className="contenedor">
                <div className={Styles.barra}>
                    <Link href="/" className={Styles.logo}>
                        <Image width={550} height={200} src="/img/letrasRM.png" alt="logo" style={{ maxWidth: '100%' }} />
                    </Link>
                </div>
            </div>
            <Nav/>
        </header>
    )
}


export default Header

