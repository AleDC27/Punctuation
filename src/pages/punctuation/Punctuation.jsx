import { useState } from "react";
import { Icon } from "semantic-ui-react";
import s from "./Punctuation.module.scss";
import Reviews from "../../components/reviews/Reviews";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Punctuation() {
  const [t,i18n]=useTranslation("global");
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const starColor = i < rating ? "rgb(255, 255, 3)" : "#fff"; // Change color based on rating
      stars.push(
        <Icon
          key={i}
          name="star"
          onClick={() => handleStarClick(i)}
          style={{ color: starColor, cursor: "pointer" }}
        />
      );
    }

    return stars;
  };

  return (
    <div className={s.containerd}>
      <div className={s.image}>
        <img src="/WhatsApp Image 2023-07-26 at 19.13.37.jpeg" alt="foot" />
      </div>
      <div className={s.content_0}>
        <div>
          <h4>
            {`imenú `}
            <div
              style={{ display: "inline", background: "red", padding: "1px" }}
            >
              <Icon size="small" name="cloud" className={s.cloud} />
            </div>
          </h4>
          <h3>{t("punctuation.How did you do on the app?")}</h3>
          <div>
            <div className={s.content_star}>{renderStars()}</div>
          </div>
        </div>
        <div className={s.content_2}>
          <Reviews />
        </div>
        <br />
        <Link to="/listFood" className={s.re_order}>
          Volver a pedir
        </Link>
      </div>
    </div>
  );
}
