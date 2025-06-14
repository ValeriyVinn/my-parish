import myImg from "../../assets/img/myimg.jpg";
import css from "./News.module.css"

export default function News() {
  return (
    <div>
      <h1 className={css.news}>Новини</h1>
      <img className={css.myImg} src={myImg} alt="my picture" width={"90%"} />
    </div>
  );
}
