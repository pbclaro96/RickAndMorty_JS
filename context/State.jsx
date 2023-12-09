import { useReducer } from 'react'
import { useRouter } from 'next/router'
import { Contexto } from './Context'
import { Reducer } from './Reducer'
import axios from 'axios';


const State = ({ children }) => {
    const router = useRouter();
    const { id } = router.query;
    const initialState = {
        numero: 4,
        characters: [],
        character: {},
        origin:{},
        location:{},
        page: 0
    };

    const [state, dispatch] = useReducer(Reducer, initialState);

    const resetPage = () => {
        dispatch({
            payload: 0,
            type: 'reset'
        })
    }
    const fetchCharacter = async (id) => {
        let character = 'setCharacter'
        const resp = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const characterData = resp.data;
        dispatch({
            payload: characterData,
            type:character
        })
    }

    const fetchPage = async (page) => {
        page === 0 ? page = 1 : page
        let characters = 'setCharacters'
        const resp = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
        const characterData = resp.data;
        dispatch({
            payload: characterData.results,
            type:characters,
            page
        })
    }

    return (
        <Contexto.Provider value={{
            numero: state.numero,
            page: state.page,
            characters: state.characters,
            character: state.character,
            origin: state.origin,
            location:state.location,
            fetchPage,
            fetchCharacter,
            id,
            resetPage
        }}>
            {children}
        </Contexto.Provider>
    )
}

export default State