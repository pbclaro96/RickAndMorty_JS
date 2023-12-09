import Image from 'next/image'
import Styles from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <Image src={'/heart.png'} alt="personaje" width="32" height="32"/>
            <h1> Paola Barros</h1>
            <Image src={'/racoon.png'} alt="personaje" width="32" height="32"/>
        </footer>
    )
}


export default Footer