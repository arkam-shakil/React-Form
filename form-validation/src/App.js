import List from './List';
import Form from './FormComponents/Form';
import ScreenReaderAnnouncementRegion from './ScreenReaderAnnouncementRegion';

function App() {
	return (
		<div className="App">
			<h3>My List</h3>
			<List items={["Apple", "Mango", "Banana"]} />
			<Form />
			<ScreenReaderAnnouncementRegion />
		</div>
	);
}

export default App;
