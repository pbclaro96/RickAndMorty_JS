import { Contexto } from '../context/Context'
import State from '../context/State'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  
    <State>
      <Component {...pageProps} />
    </State>
 
  
  )
}

export default MyApp
