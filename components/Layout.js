import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
const Layout = ({children, pagina}) => {
    return(
        <div>
            <Head>
                <title>RickAndMorty - {pagina}</title>
                <link rel="icon" type="image/ico" href="/iconoMorty.ico"/>
                <meta name="description" content="Sitio Web de personajes de la serie Rick y Morty" />
            </Head>
            {children}
            <Header />
        </div>
    )
}

export default Layout