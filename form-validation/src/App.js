import React, { useState, useEffect } from 'react';
import List from './ListComponent/List';
import Form from './FormComponents/Form';
import ScreenReaderAnnouncementRegion from './ScreenReaderAnnouncementRegionComponent/ScreenReaderAnnouncementRegion';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		// Simulate a 5-second delay
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 5000);
		
		return () => clearTimeout(timer);
	}, []);
	
	return (
		<div className="App">
			{isLoading ? (
				<div aria-live="assertive">Loading, Please wait...</div> //loading indicator component
			) : (
				<>
				<h3>My List</h3>
				<List items={["Apple", "Mango", "Banana"]} />
				<Form />
				<ScreenReaderAnnouncementRegion />
				</>
			)}
		</div>
	);
}

export default App;
