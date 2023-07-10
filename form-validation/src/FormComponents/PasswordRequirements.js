import CheckBox from './CheckBox';

function PasswordRequirements() {
	let passwordRequirements = ["8 characters", "At least 1 symbol", "1 number", "1 capital letter"];
	let passwordRequirementsID = ["eightcharacters", "onesymbol", "onenumber", "onecapitalletter"];
	
	return (
		<div id="password-requirements">
			<h3>Password Requirements</h3>
			<p>Your passwords must contain</p>
			<ul>
				{passwordRequirements.map((passwordRequirements, index) => (
					<li key={passwordRequirementsID[index]}>
						<CheckBox passwordRequirements={passwordRequirements} passwordRequirementsID={passwordRequirementsID[index]} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default PasswordRequirements;