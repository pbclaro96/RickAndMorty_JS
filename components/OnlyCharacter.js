import Styles from '../styles/Grid.module.css'
import Image from 'next/image'
const OnlyCharacter = ({ character }) => {
  const { location: { name: nameLocal } } = character
  return (
    <div>
      <div key={character.id} className={Styles.containerOnlyCharacter}>
        <div className={Styles.nombre}>
          <h2>{character.name}</h2>
        </div>
        <div className={Styles.container2}>
          <div className={Styles.contenedorImagen}>
            <Image className={Styles.imagenOnlyCharacter} width={400} height={300} src={character.image} alt="personaje" style={{ height: 'auto', maxWidth: '100%' }} />
          </div>
          <div className={Styles.letras}>
            <h4>Estado: {character.status}</h4>
            <h4>Especie: {character.species}</h4>
            <h4>Género: {character.gender}</h4>
            <h4>Origen: {character.origin.name}</h4>
            <h4>Ubicación: {nameLocal}</h4>
            <h4>Episode: {character.episode.length}</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OnlyCharacter