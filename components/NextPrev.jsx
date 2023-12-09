import { useContext } from 'react'
import { useEffect, useState } from 'react'
import Styles from '../styles/NextPrev.module.css'
import Link from 'next/link'
import { Contexto } from '../context/Context'
const NextPrev = () => {
  const [pag, setPag] = useState([])
  const { page, fetchPage } = useContext(Contexto)
  const next = () => {
    fetchPage(page + 1)
  }
  const prev = () => {
    fetchPage(page - 1)
  }


  return (
    <div className={Styles.contenedor}>
      <button
        name="prev"
        onClick={prev}
        className={Styles.prev}
        style={{ display: (page - 1 === 0) ? 'none' : '' }}
      >
        Prev
      </button>

      <button name="next" onClick={next} className={Styles.next} style={{ display: (page + 1 === 43) ? 'none' : '' }}>Next</button>
    </div>
  )
}


export default NextPrev