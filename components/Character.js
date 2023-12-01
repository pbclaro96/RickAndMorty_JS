import Styles from '../styles/Grid.module.css'
import Image from 'next/image'
const Character = ({ character }) => {
  return (
    <div>
      <div key={character.id} className={Styles.containerCharacters}>
        <Image className={Styles.imagen} width={400} height={300} src={character.image} alt="personaje" style={{ height: 'auto', maxWidth: '100%' }} />
        <h2>{character.name}</h2>
        <h4>Estado: {character.status}</h4>
        <h4>Especie: {character.species}</h4>
        <h4>Género: {character.gender}</h4>
      </div>
    </div>
  )
}

export default Character