function InputField(props) {
	return (
		<div>
			<label for={props.id}>{props.fieldname}</label>
			<br />
			<input id={props.id} name={props.name} type={props.type} value={props.value} onInput={props.onInput} />
		</div>
	);
}

export default InputField;