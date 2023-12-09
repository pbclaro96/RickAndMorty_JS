import { useContext, useEffect } from 'react'
import { Contexto } from '../context/Context'
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import Character from '../components/Character'
import NextPrev from '../components/NextPrev';

export default function Home() {

  const { page, characters, fetchPage } = useContext(Contexto)
  useEffect(() => {
    fetchPage(page)
  }, [page])
  
  return (
    <div>
      <Layout pagina='Inicio'>
        <div>
          <Grid
            characters={characters}
            Pagina = {Character}
          />
          <NextPrev/>
        </div>
      </Layout>
    </div>
  )
}