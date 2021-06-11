import React from 'react';
import './cards.scss';

//Images
import carImage from '../../../assets/images/carpromo.png'

function CardAds () {

	return <React.Fragment>
		<div className="card-box">
			<div className="card-box__header">
				<figure className="card-box__header--img">
					<img src={carImage} alt="Logo" />
				</figure>
				<p className="card-box__header--title">
					¡seguro de<br />viaje <span>gratis!</span>
				</p>
			</div>
			<div className="card-box__body">
				<p className="card-box__body--text">
					Con cobertura médica frente<br />al Coronavirus de <strong>USD $100.000</strong>
				</p>
			</div>
		</div>
	</React.Fragment>
  }

export default CardAds;
