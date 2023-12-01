import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import Character from '../components/Character'
import NextPrev from '../components/NextPrev';

export default function Home({ characters: charactersProp }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const cha = async () => {
      const resp = await fetch("https://rickandmortyapi.com/api/character")
      const characterData = await resp.json()
      setCharacters(characterData.results)
    }

    cha();

  }, [])

  return (
    <div>
      <Layout pagina='Inicio'>
        <div>
            <Grid characters={characters}
              Pagina={Character}
            />
            <NextPrev/>
        </div>
      </Layout>
    </div>
  )
}