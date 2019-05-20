import * as React from 'react';

import './Style.scss';

function InputNumber (props) {
	const [ value, setValue ] = React.useState('');
	const [ error, setError ] = React.useState(null);

	

	const handleChange = (event) => {
		const value = event.target.value;

		if (!value.match(/^[0-9]*$/)) {
			return false;
		}

		if (props.filter && !props.filter(value)) {
			setError('Number has to be between 18 and 40');
		} else {
			setError(null);
		}

		setValue(event.target.value);

		if (props.onChange) {
			props.onChange(event.target.value);
		}
	}

	return (
			<input 
				value={value}
				name={props.name}
				type={props.type}
				onChange={handleChange}
				placeholder={props.placeholder}
				className={'input'}
			/>
			/*{
				error && <p>{error}</p>
			}*/
	);
} 



export default InputNumber;