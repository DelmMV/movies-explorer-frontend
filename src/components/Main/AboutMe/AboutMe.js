import "./AboutMe.css";
import photoPath from "../../../images/aboutMe/studentPic.png";

function AboutMe(props) {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__header_main">Студент</h2>
        <div className="about-me__summary">
          <div className="about-me__texts">
            <h3 className="about-me__header">Виталий</h3>
            <p className="about-me__about">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="about-me__links">
              <a
                className="about-me__link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Ссылка ведущая на Facebook"
              >
                Facebook
              </a>
              <a
                className="about-me__link"
                href="https://github.com/DelmMV"
                target="_blank"
                rel="noopener noreferrer"
                title="Ссылка ведущая на Github владельца"
              >
                Github
              </a>
            </ul>
          </div>
          <img
            className="about-me__photo"
            alt="Фото студента"
            src={photoPath}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
