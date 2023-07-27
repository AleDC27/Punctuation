import { useState } from "react";
import { Icon } from "semantic-ui-react";
import s from './Punctuation.module.css';
import Reviews from "../../components/reviews/Reviews";

export default function Punctuation() {
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
      <img
        src="/WhatsApp Image 2023-07-26 at 19.13.37.jpeg"
        alt="foot"
      />
      </div>
      <div className={s.content_0}>
        <div className={s.content_1}>
          <h4 style={{color:"red" ,letterSpacing:"4px",textAlign:"center"}}>{`¡ menú `}
          <div style={{display:"inline",background:"red",padding:"1px"}}>
           <Icon size="small" name='cloud' className={s.cloud}/>
          </div>
          </h4>
          <h3>¿Cómo te fue en la app?</h3>
          <div>
            <div className={s.content_star}>{renderStars()}</div>
          </div>
        </div>
        <div className={s.content_2}>
          <Reviews/>
        </div>
        <br />
        <button className={s.re_order} style={{fontSize:"28px"}}>Volver a pedir</button>
      </div>
    </div>
  );
}
