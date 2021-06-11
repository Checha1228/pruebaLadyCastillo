import React from 'react';
import './second-block.scss';

//Componets
import CardAds from '../../cards/card-ad';
import ItemRanking from '../../list/ranking'

//Images
import trustpilot from '../../../../assets/images/trustpilot-logo.png';
import threeStars from '../../../../assets/images/three-stars-icon.png';
import fourStars from '../../../../assets/images/four-stars-icon.png'

const rankingCars = [
	{
		image: trustpilot,
		score: "4.7 / 5",
		star: fourStars,
		number: "3200+",
		id: "abc"
	},
	{
		image: trustpilot,
		score: "3 / 5",
		star: threeStars,
		number: "2000+",
		id: "def"
	},
	{
		image: trustpilot,
		score: "4.5 / 5",
		star: fourStars,
		number: "1400+",
		id: "ghi"
	}
]

function ContentSecondBlock () {

	return <React.Fragment>
		<CardAds />
		<div className="ranking__list--content">
			<div className="ranking__list">
				{rankingCars.map(item => (
					<ItemRanking 
						key={item.id}
						logo={item.image}
						scores={item.score}
						comments={item.number}
						stars={item.star}
					/>
					)
				)}
			</div>
		</div>
		
	</React.Fragment>
  }

export default ContentSecondBlock;
