import Styles from '../styles/Grid.module.css'
const Grid = ({ characters, Pagina }) => {
    return (
        <div>
            <div className={Styles.contenedorPrincipal}>
                {characters.map((character, i) => (
                    <div key={i}>
                       <Pagina character={character} />
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Grid