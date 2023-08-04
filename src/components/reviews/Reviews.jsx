import React from "react";
import s from "./reviews.module.scss";
import { useState } from "react";
import Confetti from 'react-confetti';
import { useTranslation } from 'react-i18next';

export default function Reviews() {
  const [t,i18n]=useTranslation("global");
  const [send, setSend] = useState(true);
  const [caracteres,setCaracteres]=useState(0);

  const handleClikc = () => {
    setSend(!send)
  };

  const handleChange=(e)=>{
    const inputText = e.target.value;
    setCaracteres(inputText.length);
  }

  return (
    <>
      {send ? (
        <div className={s.containerd}>
            <section className={s.content}>
          <b>{t("reviews.Write your review")}</b>
          <span>{caracteres}/240</span>
            </section>
          <br />
          <textarea
            maxLength="240"
            id="miTextarea"
            placeholder={t("reviews.Do you like our way of doing things?")}
            onChange={handleChange}
          ></textarea>
          <br />
          <button className={s.send} onClick={handleClikc}>{t("reviews.send")}</button>
        </div>
      ) : (
        <div style={{textAlign:"center",width:"100%"}}>
          <Confetti numberOfPieces={200}/>
          <h1>{t("reviews.Thank you!")}</h1>
          <span>{t("reviews.Your opinion helps us grow")}</span>
        </div>
      )}
    </>
  );
}
