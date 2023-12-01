import Styles from '../styles/Grid.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Character = ({ character }) => {
  return (
    <div>
      <div key={character.id} className={Styles.containerCharacters}>
        <Link href={`indexCharacter/${character.id}`} passHref>
          <Image className={Styles.imagen} width={400} height={300} src={character.image} alt="personaje" style={{ height: 'auto', maxWidth: '100%' }} />
          <h2>{character.name}</h2>
          <h4>Estado: {character.status}</h4>
          <h4>Especie: {character.species}</h4>
          <h4>Género: {character.gender}</h4>
        </Link>
      </div>
    </div>
  )
}

export default Character