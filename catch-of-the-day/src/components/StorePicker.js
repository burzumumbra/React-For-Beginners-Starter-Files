import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';


class StorePicker extends React.Component{
	myInput = React.createRef();
	static propTypes = {
		history: PropTypes.object
	}
	goToStore = (event) =>{
		//1.Stops form from submit
		event.preventDefault();
		//2.Get text from import
		const storeName = this.myInput.value.value;
		//3.Change the page to /store/*
		this.props.history.push(`/store/${storeName}`);
	}

	render(){
		return (
			<Fragment>
				{ /*Comment*/ }
				<form className="store-selector" 
				onSubmit={this.goToStore}>
					<h2>Please Enter A Store</h2>
					<input 
						type="text" 
						ref={this.myInput}
						required
						placeholder="Store name" 
						defaultValue={getFunName()}
					/>
					<button type="submit">Visit Store</button>
				</form>
			</Fragment>
		);
	}
}

export default StorePicker;