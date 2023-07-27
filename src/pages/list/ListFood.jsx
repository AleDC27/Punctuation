import Nav from "../../components/nav/Nav"
import { Icon } from "semantic-ui-react"
import { FaBeer} from 'react-icons/fa';
import { TbArrowBackUp} from "react-icons/tb";
import {MdLibraryBooks} from 'react-icons/md'

export default function ListFood() {
  return (
    <>
    <Nav/>
    <TbArrowBackUp size={35} style={{margin:"1rem 0 0 0"}} />
    <br />
    <div style={{display:"flex",alignItems:"center"}}>
    <h3><MdLibraryBooks style={{position:"relative",bottom:"0",margin:"0 0 -4px 0"}}/> Menú {">"} Gestionar menú actual</h3>
    </div>
    </>
  )
}
