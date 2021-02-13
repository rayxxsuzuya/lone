import React from 'react';
import './Movie.css';

function Movie({id, year, title, summary, medium_cover_image, genres}) {
	return (
		<div className="movie">
			<img className="movie__poster" src={medium_cover_image} alt={title} title={title} />
			<div className="movie__column">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<ul className="genres">{genres.map((genre, index) => <li key={index} className="genres__item">{genre}</li>)}</ul>
				<p className="movie__summary">{summary.slice(0, 140) + "..."}</p>
			</div>
			
		</div>
	);
}

export default Movie;