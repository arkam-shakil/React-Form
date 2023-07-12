function CheckBox(props) {
	return (
		<div>
			<input type="checkbox" id={props.passwordRequirementsID} name={props.name} disabled={props.disabled} checked={props.checked} onInput={props.onInput}/>
			<label for={props.passwordRequirementsID} >{props.passwordRequirements}</label>
		</div>
	);
}

export default CheckBox;