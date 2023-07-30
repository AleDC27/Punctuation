import Nav from "../../components/nav/Nav"
import { Icon } from "semantic-ui-react"
import { FaBeer} from 'react-icons/fa';
import { TbArrowBackUp} from "react-icons/tb";
import {MdLibraryBooks} from 'react-icons/md'
import s from './listFood.module.css'

export default function ListFood() {
  return (
    <>
    <Nav/>
    <TbArrowBackUp size={35} style={{margin:"1rem 0 1rem 1rem"}} />
    <br />
    <div style={{display:"flex",flexDirection:"column",margin:"0 0 0 1rem"}}>
    <h3><MdLibraryBooks style={{position:"relative",bottom:"0",margin:"0 5px -4px 0"}}/> Menú {">"} Gestionar menú actual</h3>
    <span className={s.gestiona} >Gestiona tu menú desde aquí</span>
    </div>
    <div className={s.list}>
      <section className={s.emoji}>s</section>
      <section className={s.product}>d</section>
      <section className={s.price}>f</section>
      <section className={s.on_of}>g</section>
    </div>
    </>
  )
}
