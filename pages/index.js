import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
export default function Home({ character }) {
  return (
    <div>
      <Layout pagina='Inicio'>
      </Layout>

      <div className={styles.contenedorPrincipal}>
        {
          character.map(cha => (
            <div key={cha.id} className={styles.containerCharacters}>
                <img src={cha.image} alt="personaje" />
                <h2>{cha.name}</h2>
                <h4>Estado: {cha.status}</h4>
                <h4>Especie: {cha.species}</h4>
                <h4>Género: {cha.gender}</h4>
            </div>
          ))

        }
      </div>
        <div>
          <Nav></Nav>
        </div>
      <div>
        <Footer></Footer>
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