import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import OnlyCharacter from '../../components/OnlyCharacter';

const EachCharacter = ({ characters }) => {
  const router = useRouter();
  const [character, setCharacter] = useState([]);
  const { id } = router.query;
  console.log(id);
  const fetchCharacter = async () => {
    const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const characterData = await resp.json();
    setCharacter([characterData]);
  }
  useEffect(() => {
    if(id){
      fetchCharacter();
    };
  }, [id]);
  console.log(character);
  return (
    <div>
      <Layout pagina ={character}>
        {
          <Grid
          characters={character}
          Pagina={OnlyCharacter}
        />
        }
      </Layout >
    </div>
  );
};

export default EachCharacter;
