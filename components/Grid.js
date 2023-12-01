import { useState } from 'react'
import Link from 'next/link'
import Styles from '../styles/Grid.module.css'
const Grid = ({ characters, Pagina }) => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const characterClick = (character) => {
        setSelectedCharacter(character)
    }

    return (
        <div>
            <div className={Styles.contenedorPrincipal}>
                {characters.map(character => (
                    <div>
                        <Link href={`indexCharacter/${character.id}`}passHref>
                            <Pagina character={character} />
                        </Link>
                    </div>
                    
                ))}

            </div>
        </div>
    )
}
export default Grid