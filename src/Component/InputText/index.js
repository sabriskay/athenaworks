import * as React from 'react';
import './Style.scss';

function InputText (props) {
	const [ value, setValue ] = React.useState('');

	const handleChange = (event) => {
		if (event.target.value.match(/^[A-z]*$/)) {
			setValue(event.target.value);
			
			if (props.onChange) {
				props.onChange(event.target.value);
			}
		}
	}
	
	return (
			<input 
				value={value}
				name={props.name}
				type={props.type}
				onChange={handleChange}
				className={'input'}
				placeholder={props.placeholder}
			/>
	);
} 



export default InputText;