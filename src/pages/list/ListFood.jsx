import Nav from "../../components/nav/Nav";
import { Icon } from "semantic-ui-react";
import { FaBeer } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";
import { MdLibraryBooks } from "react-icons/md";
import s from "./listFood.module.css";
import { emoji, price, nameProduct,foods } from "./list";
import { useState } from "react";

export default function ListFood() {
  const [onOffStates, setOnOffStates] = useState(emoji.map(() => true));

  const handleClickEyes = (index) => {
    const newOnOffStates = [...onOffStates];
    newOnOffStates[index] = !newOnOffStates[index];
    setOnOffStates(newOnOffStates);
  };

  return (
    <>
      <Nav />
      <TbArrowBackUp size={35} style={{ margin: "1rem 0 1rem 1rem" }} />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 0 0 1rem",
        }}
      >
        <h3>
          <MdLibraryBooks
            style={{
              position: "relative",
              bottom: "0",
              margin: "0 5px -4px 0",
            }}
          />{" "}
          Menú {">"} Gestionar menú actual
        </h3>
        <span className={s.gestiona}>Gestiona tu menú desde aquí</span>
      </div>
      <div className={s.list}>
        <div className={s.content_1} > 
          <span style={{width:"20%"}}>Emoji</span>
          <span style={{width:"44%"}}>Producto</span>
          <span style={{width:"18%"}}>Precio</span>
          <span style={{width:"18%"}}>On/Off</span>
        </div>
        <div className={s.content_seg}>
          {foods.map((cur,idx)=> <article key={idx}>
            <span style={{width:"20%",textAlign:"center"}}>{cur.emoji}<Icon name="angle down"/></span>
            <span style={{width:"44%",textAlign:"start",fontSize:"15px"}}>{cur.name}</span>
            <span style={{width:"18%",textAlign:"center"}}>{cur.price}</span>
            <span style={{width:"18%",textAlign:"center"}}><Icon name="eye"/> </span>
          </article> )}
        </div>
      </div>
    </>
  );
}
