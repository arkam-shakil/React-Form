import './App.css';

function ScreenReaderAnnouncementRegion() {
	return (
		<div role="region" aria-label="Announcement Region for Screen Readers">
			<p>This section is specifically intended for delivering live announcements to users utilizing screen readers and can be disregarded.</p>
			<div id="SRAnnouncementRegion" className="SRAnnouncementRegion" aria-live="polite">
				<p> </p>
			</div>
		</div>
	);
}

export default ScreenReaderAnnouncementRegion;