import './App.css';
import InputField from './InputField';
function Form() {
	return (
		<form method="post" action="sample.php">
			<InputField fieldname="User Name" id="username" type="text" name="username" />
			<InputField fieldname="Password" id="password" type="password" name="password" />
		</form>
	);
}

export default Form;