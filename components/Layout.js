import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
const Layout = ({ children, pagina='' }) => {
    return (
            <div>
                <Head>
                    <title>{`RickAndMorty - ${pagina}`}</title>
                    <link rel="icon" type="image/ico" href="/iconoMorty.ico" />
                    <meta name="description" content="Sitio Web de personajes de la serie Rick y Morty" />
                </Head>
                <Header />
                {children}
                <Footer />
            </div>
    )
}

export default Layout