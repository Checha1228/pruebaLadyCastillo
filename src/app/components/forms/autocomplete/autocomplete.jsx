import React, { Component} from 'react';
import '../../forms/forms.scss';

//Images
import { ReactComponent as CarIcon } from '../../../../assets/images/car--icon.svg';

class Autocomplete extends Component {
	constructor(props) {
		super(props);
		this.items = [
			'Aeropuerto El Dorado - Bogotá, Colombia',
			'Madrid-Barajas, España',
			'Aeropuerto de Frankfurt - Frankfurt, Alemania',
			'Hong Kong, China',
		];
		this.state = {
			suggestions: [],
			text: '',
			label: '',
			icon: ''
		};
	};

	onTextChanged = (e) => {
		const value = e.target.value;
		let suggestions = [];

		if (value.length > 0) {
			const regex = new RegExp(`^${value}`, 'i');
			suggestions = this.items.sort().filter(v => regex.test(v));	
		}
		this.setState(() => ({suggestions, text: value}));
	}

	suggestionSelected (value) {
		this.setState(() => ({
			text: value,
			suggestions: [],
		}))
	}

	renderSuggestions() {
		const {suggestions} = this.state;
		if (suggestions.length === 0) {
			return null;
		}
		return (
			<ul className="autocomplete__list">
				{suggestions.map((item) => 
					<li onClick={() => this.suggestionSelected(item)}>{item}</li>)
				}
			</ul>
		)
	}

	render() {
		const { text } = this.state;

		return <React.Fragment>
			<div className="form__group">
				<figure className="form__group--icon">
					<CarIcon />
				</figure>
				<label className="form__group--label" htmlFor="">Localidad de Retiro</label>
				<input className="form__group--input" onChange={this.onTextChanged} value={text} placeholder="Ciudad, Aeropuerto o Ciudad" type="text" />
				{this.renderSuggestions()}
			</div>
		</React.Fragment>
	}
}

export default Autocomplete;
