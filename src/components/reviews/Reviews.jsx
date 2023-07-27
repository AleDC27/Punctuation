import React from "react";
import s from "./reviews.module.css";
import { useState } from "react";

export default function Reviews({ num }) {
  const [send, setSend] = useState(true);

  const handleClikc = () => {
    setSend(!send)
  };

  return (
    <>
      {send ? (
        <div className={s.containerd}>
          <b>Danos tu opinión</b>
          <span className={s.caracteres}>{num ? num : 0}/240</span>
          <br />
          <textarea
            maxLength="100"
            id="miTextarea"
            placeholder="¿Te gustá nuestra forma de hacer las cosas?"
          ></textarea>
          <br />
          <button className={s.send} onClick={handleClikc}>Enviar</button>
        </div>
      ) : (
        <div style={{textAlign:"center",width:"100%"}}>
          <h1>¡Gracias!</h1>
          <span>Tu opinión nos ayuda a crecer</span>
        </div>
      )}
    </>
  );
}
