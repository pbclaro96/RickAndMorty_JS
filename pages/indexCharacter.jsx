import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import Grid from '../components/Grid'
import OnlyCharacter from '../components/OnlyCharacter'

export default function Home(){

  const router = useRouter();
  const [character, setCharacter] = useState([]);
  const { id } = router.query;
  useEffect(() => {
    const fetchCharacter = async () => {
      const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const characterData = await resp.json();
      setCharacter(characterData);

    };

    fetchCharacter();

  }, []);
    return (
        <div>
          <Layout pagina='only'>
            <div>
              {/* {
                <Grid
                  characters={character}
                  Pagina={OnlyCharacter}
                />
              } */}
            </div>
          </Layout>
        </div>
      )
}