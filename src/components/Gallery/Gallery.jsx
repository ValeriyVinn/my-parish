import img1 from "../../assets/img/unnamed0.jpg";
import img2 from "../../assets/img/unnamed.jpg";
import img3 from "../../assets/img/unnamed1.jpg";
import img4 from "../../assets/img/unnamed11.jpg";
import img5 from "../../assets/img/unnamed12.jpg";
import img6 from "../../assets/img/unnamed15.jpg";
import img7 from "../../assets/img/unnamed2.jpg";
import img8 from "../../assets/img/unnamed22.jpg";
import img9 from "../../assets/img/unnamed3.jpg";
import img10 from "../../assets/img/unnamed33.jpg";
import img11 from "../../assets/img/unnamed4.jpg";
import img12 from "../../assets/img/unnamed44.jpg";
import img13 from "../../assets/img/unnamed5.jpg";
import img14 from "../../assets/img/unnamed55.jpg";
import img15 from "../../assets/img/unnamed6.jpg";
import img16 from "../../assets/img/unnamed66.jpg";
import img17 from "../../assets/img/unnamed7.jpg";
import img18 from "../../assets/img/unnamed77.jpg";
import img19 from "../../assets/img/unnamed8.jpg";
import img20 from "../../assets/img/unnamed88.jpg";
import img21 from "../../assets/img/unnamed9.jpg";


import css from "./Gallery.module.css";

export default function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
  ];

  return (
    <div className={css.gallery}>
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Фото ${idx + 1}`} loading="lazy" />
      ))}
    </div>
  );
}
