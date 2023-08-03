import Nav from "../../components/nav/Nav";
import { Icon } from "semantic-ui-react";
import { TbArrowBackUp } from "react-icons/tb";
import { MdLibraryBooks } from "react-icons/md";
import s from "./listFood.module.scss";
import { foods } from "./list";
import { useState } from "react";

export default function ListFood() {
  const [onOffStates, setOnOffStates] = useState(foods.map(() => true));

  const handleClickEyes = (index) => {
    const newOnOffStates = [...onOffStates];
    newOnOffStates[index] = !newOnOffStates[index];
    setOnOffStates(newOnOffStates);
  };

  return (
    <>
      <Nav />
      <TbArrowBackUp size={30} style={{ margin: "1rem 0 1rem 0.7rem" }} />
      <div className={s.content_menu}>
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
        <span>Gestiona tu menú desde aquí</span>
      </div>
      <div className={s.list}>
        <div className={s.list_content_1}>
          <span style={{ width: "20%" }}>Emoji</span>
          <span style={{ width: "44%" }}>Producto</span>
          <span style={{ width: "18%" }}>Precio</span>
          <span style={{ width: "18%" }}>On/Off</span>
        </div>
        <div className={s.list_content_2}>
          {foods.map((cur, idx) => (
            <article key={idx} className={s.list_content_2_menu} >
              <div>
                <span className={onOffStates[idx]?s.span_active:s.span_inactive}>
                  {cur.emoji}
                  <Icon name="angle down" />
                </span>
              </div>
              <div>
                <span className={onOffStates[idx]?s.span_active:s.span_inactive}>{cur.name}</span>
                <span className={onOffStates[idx]?s.span_active:s.span_inactive}>{cur.price}</span>
                <span className={onOffStates[idx]?s.span_active:s.span_inactive}>
                  <Icon
                    name={onOffStates[idx] ? "eye" : "eye slash"}
                    onClick={() => handleClickEyes(idx)}
                  />{" "}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
