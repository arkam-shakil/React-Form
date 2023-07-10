import React from 'react';
import InputField from './InputField';
import CheckBox from './CheckBox';

function Form() {
	const passwordRequirements = ["8 characters", "At least 1 symbol", "1 number", "1 capital letter"];
	const passwordRequirementsID = ["eightcharacters", "onesymbol", "onenumber", "onecapitalletter"];
	
	const validatePasswordField = (event) => {
		let inputFieldValue = event.target.value; // Access the value using event.target.value
		
		if (inputFieldValue.length > 8) {
			document.querySelector("#eightcharacters").setAttribute("checked", "true");
		}
		else {
			document.querySelector("#eightcharacters").removeAttribute("checked", "false");
		}
		
		if (/[!@#$%^&*]/.test(inputFieldValue) == true) {
			document.querySelector("#onesymbol").setAttribute("checked", "true");
		}
		else {
			document.querySelector("#onesymbol").removeAttribute("checked", "false");
		}
		
		if (/\d/.test(inputFieldValue) == true) {
			document.querySelector("#onenumber").setAttribute("checked", "true");
		}
		else {
			document.querySelector("#onenumber").removeAttribute("checked", "false");
		}

		if (/[A-Z]/.test(inputFieldValue) == true) {
			document.querySelector("#onecapitalletter").setAttribute("checked", "true");
		}
		else {
			document.querySelector("#onecapitalletter").removeAttribute("checked", "false");
		}
	};

	return (
		<form method="post" action="sample.php">
			<InputField fieldname="User Name" id="username" type="text" name="username" />
			<InputField fieldname="Password" id="password" type="password" name="password" onInput={(event) => validatePasswordField(event)} />
			<div id="password-requirements">
				<h3>Password Requirements</h3>
				<p>Your passwords must contain</p>
				<div role="group" aria-label="Your passwords must contain">
					<CheckBox passwordRequirements={passwordRequirements[0]} passwordRequirementsID={passwordRequirementsID[0]} disabled="true" />
					<CheckBox passwordRequirements={passwordRequirements[1]} passwordRequirementsID={passwordRequirementsID[1]} disabled="true" />
					<CheckBox passwordRequirements={passwordRequirements[2]} passwordRequirementsID={passwordRequirementsID[2]} disabled="true" />
					<CheckBox passwordRequirements={passwordRequirements[3]} passwordRequirementsID={passwordRequirementsID[3]} disabled="true" />
				</div>
			</div>
			
			<input type="submit" />
		</form>
	);
}

export default Form;
