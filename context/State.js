import { createContext, useState, useEffect } from 'react'

const contexto = createContext()

const ConsumoApi = ({ children }) => {
    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("https://rickandmortyapi.com/api/character")
            const characterData = await resp.json()
            setCharacters(characterData.results)
        }

        fetchData()

    }, [])

    return (
        <contexto.Provider value={{ characters }}>
            {children}
        </contexto.Provider>
    )
}

export { ConsumoApi, contexto }