import styles from '../styles/Grid.module.css'
export default function Grid({ character }) {
    return (
        <div>
            <div>
                {
                    character.map(cha => (
                        <div key={cha.id}>
                            <img src={cha.image} alt="personaje" />
                            <h4>{cha.name}</h4>
                            <h4>{cha.status}</h4>
                            <h4>{cha.species}</h4>
                            <h4>{cha.gender}</h4>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}
export const getServerSideProps = async (context) => {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const characters = await res.json()

    return {
        props: {
            character: characters.results
        }

    }

}