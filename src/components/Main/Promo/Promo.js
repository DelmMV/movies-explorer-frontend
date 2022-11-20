import "./Promo.css";

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__container_text">
          <h1 className="promo__header">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <nav className="promo__nav">
            <a className="promo__ankhor" href="#about-project">
              О проекте
            </a>
            <a className="promo__ankhor" href="#techs">
              Технологии
            </a>
            <a className="promo__ankhor" href="#about-me">
              Cтудент
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Promo;
