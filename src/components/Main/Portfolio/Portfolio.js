import React from "react";
import LinkImage from "../../../images/link.svg";

function Portfolio() {
	return (
			<section className="portfolio page__container">
				<h2 className="portfolio__title">Портфолио</h2>
				<ul className="portfolio__list">
					<li className="portfolio__list-item">
						<a
								href="https://delmmv.github.io/how-to-learn/"
								className="portfoio__link"
								target="_blank"
								rel="nooperen noreferrer"
						>
							<p className="portfolio__item-name">Статичный сайт</p>
							<img className="porfolio__item-link" src={LinkImage} alt="ссылка"/>
						</a>
					</li>
					<li className="portfolio__list-item">
						<a
								href="https://delmmv.github.io/russian-travel/"
								className="portfoio__link"
								target="_blank"
								rel="nooperen noreferrer"
						>
							<p className="portfolio__item-name"> Адаптивный сайт</p>
							<img className="porfolio__item-link" src={LinkImage} alt="ссылка"/>
						</a>
					</li>
					<li className="portfolio__list-item">
						<a
								href="https://delm.nomoredomains.sbs"
								className="portfoio__link"
								target="_blank"
								rel="nooperen noreferrer"
						>
							<p className="portfolio__item-name">Одностраничное приложение</p>
							<img className="porfolio__item-link" src={LinkImage} alt="ссылка"/>
						</a>
					</li>
				</ul>
			</section>
	);
}

export default Portfolio;
