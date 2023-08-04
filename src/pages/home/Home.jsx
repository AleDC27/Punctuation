import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Home() {
    const [t,i18n]=useTranslation("global");

  return (
    <div>
        <h1>{t("reviews.hello-world")}</h1>
        <button onClick={()=>i18n.changeLanguage("es")}>ES</button>
        <button onClick={()=>i18n.changeLanguage("en")}>EN</button>
        <button onClick={()=>i18n.changeLanguage("pt")}>PT</button>
        <button onClick={()=>i18n.changeLanguage("pt_bra")}>PT(BR)</button>
        <br /><br />
        <Link to='/punctuation'>Punction</Link><br /><br />
        <Link to='/listFood'>List Food</Link>
    </div>
  )
}
