import React, { Component} from 'react';
import '../../forms/forms.scss';


function ToogleSwitch () {

	return <React.Fragment>
		<div className="form__group--toogle">
			<label className="form__group-switch">
				<input className="form__group-switch--input" type="checkbox"/>
				<span className="form__group-switch--slider"></span>
			</label>
			<label className="form__group--label-white" htmlFor="">Lo quiero devolver en otra localidad</label>
		</div>
	</React.Fragment>
}

export default ToogleSwitch;
