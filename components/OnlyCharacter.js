import Styles from '../styles/Grid.module.css'
import Image from 'next/image'
const OnlyCharacter = ({ character }) => {
  const { name } = character
  const { status } = character
  const { species } = character
  const { gender } = character
  const { origin: { name: nameOrigin } } = character
  const { location: { name: nameLocal } } = character
  const { episode } = character
  return (
    <div>
      <div key={character.id} className={Styles.containerOnlyCharacter}>
        <div className={Styles.nombre}>
          <h2>{name}</h2>
        </div>
        <div className={Styles.container2}>
          <div className={Styles.contenedorImagen}>
            <Image className={Styles.imagenOnlyCharacter} width={400} height={300} src={character.image} alt="personaje" style={{ height: 'auto', maxWidth: '100%' }} />
          </div>
          <div className={Styles.letras}>
            <Image className={Styles.nota} width={30} height={30} src="/nota.png" />
            <h4>Estado: {status}</h4>
            <h4>Especie: {species}</h4>
            <h4>Género: {gender}</h4>
            <h4>Episode: {episode.length}</h4>
            <h4>Origen: {nameOrigin}</h4>
            <h4>Ubicación: {nameLocal}</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OnlyCharacter