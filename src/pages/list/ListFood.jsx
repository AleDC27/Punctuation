import Nav from "../../components/nav/Nav"
import { Icon } from "semantic-ui-react"
import { FaBeer} from 'react-icons/fa';
import { TbArrowBackUp} from "react-icons/tb";

export default function ListFood() {
  return (
    <>
    <Nav/>
    <TbArrowBackUp size={35} style={{margin:"1rem 0 0 0"}} />
    <br />
    <b>Menú {">"} Gestionar menú actual</b>
    </>
  )
}
