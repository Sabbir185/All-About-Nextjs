import { getFeaturedEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";


export default function AllEventsPage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}
