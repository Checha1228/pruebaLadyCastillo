import React, { Component} from 'react';
import '../../forms/forms.scss';
import DatePicker from 'react-datepicker'
import 'react-datepicker/src/stylesheets/datepicker.scss'

//Images
import { ReactComponent as CalendarStart } from '../../../../assets/images/calendarstart-icon.svg';
import { ReactComponent as CalendarEnd } from '../../../../assets/images/calendarend-icon.svg';

class RangeDatepicker extends Component {
	state = {
		startDate: '',
		endDate: ''
	  };
	
	  onChange=startDate=> {
			this.setState({startDate: startDate})
		}
	
		onChangeEnd=endDate=> {
			this.setState({endDate: endDate})
	  }

	render() {
		const { startDate, endDate } = this.state;

		return <React.Fragment>
			<div className="form__group--range">
				<div className="form__datepicker--start">
					<figure className="form__group--icon">
						<CalendarStart />
					</figure>
					<label className="form__group--label" htmlFor="">Recogida</label>
					<DatePicker
						selected={startDate}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						onChange={this.onChange}
					/>
				</div>
				<div className="form__datepicker--end">
					<figure className="form__group--icon">
						<CalendarEnd />
					</figure>
					<label className="form__group--label" htmlFor="">Devolución</label>
					<DatePicker
						selected={endDate}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						onChange={this.onChangeEnd}
					/>
				</div>
			</div>
		</React.Fragment>
	}
}

export default RangeDatepicker;
