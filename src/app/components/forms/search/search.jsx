import React, { Component, Fragment } from 'react';
import './search.scss';

//Componets
import Autocomplete from '../autocomplete/autocomplete'
import ToogleSwitch from '../toogle/toogle'
import RangeDatepicker from '../rangeDatepicker/rangeDatepicker'

//Images
import { ReactComponent as SearchIcon } from '../../../../assets/images/search-icon.svg';


function SearchForm () {
	return <React.Fragment>
		<form action="" className="form">
			<Autocomplete />
			<ToogleSwitch />
			<RangeDatepicker />
		</form>
		<div className="button__content">
			<button className="button-icon">
				<figure className="button-icon__content--icon">
					<SearchIcon />
				</figure>
			</button>
		</div>
	</React.Fragment>
}

export default SearchForm;
