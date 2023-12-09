import Link from 'next/link'
import { Contexto } from '../context/Context'
import { useContext } from 'react'
import Styles from '../styles/Header.module.css'
import Image from 'next/image'
import Nav from './Nav'
const Header = () => {
    const { resetPage } = useContext(Contexto)
    const inicio = () =>{
        const pages=0
        resetPage(pages)
    }
    return (
        <header className={Styles.header}>
            <div className="contenedor">
                <div className={Styles.barra}>
                    <Link href="/" onClick={inicio} className={Styles.logo} passHref>
                        <Image width={550} height={200} src="/img/letrasRM.png" alt="logo" style={{ maxWidth: '100%' }}  priority={true} />
                    </Link>
                </div>
            </div>
            <Nav/>
        </header>
    )
}


export default Header

