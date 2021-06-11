import React from 'react';
import './content.scss';

//Componets
import Header from '../header/header'
import ContentSecondBlock from '../second-block/second-block'
import SeacrhForm from '../../forms/search/search'

function Content () {

	return <React.Fragment>
		<Header />
		<section className="section-default"> 
			<article className="block-booking">
				<div className="block-booking__content">
					<h1 className="block-booking__content--title">Alquiler de carros miami</h1>
					<SeacrhForm />
				</div>
			</article>
		</section>
		<section className="section-default">
			<article className="content-defaul">
				<ContentSecondBlock />
			</article>
		</section>
	</React.Fragment>
}

export default Content;
