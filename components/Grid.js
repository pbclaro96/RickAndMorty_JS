import { useState } from 'react'
import Link from 'next/link'
import Styles from '../styles/Grid.module.css'
const Grid = ({ characters, Pagina }) => {

    return (
        <div>
            <div className={Styles.contenedorPrincipal}>
                {characters.map(character => (
                    <div>
                       <Pagina character={character} />
                    </div>
                    
                ))}

            </div>
        </div>
    )
}
export default Grid