import React from 'react';
import './ranking.scss';


function ItemRanking ({logo, scores, comments, stars}) {

	return <React.Fragment>
		<div className="ranking__content">
			<div className="ranking__header">
				<figure className="ranking__header--logo">
					<img src={logo} alt="" />
				</figure>
				<div className="ranking__header--calification">
					<p className="ranking__header--text">{scores}</p>
					<div className="ranking__content--stars">
						<figure className="ranking__content--stars">
							<img src={stars} alt="" />
						</figure>
					</div>
				</div>
			</div>
			<div className="ranking__body">
				<p className="ranking__body--text">Basado en <strong>{comments}</strong> comentarios</p>
			</div>
		</div>
	</React.Fragment>
  }

export default ItemRanking;
