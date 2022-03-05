import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../data/dummy-data";
import EventSummary from "../../components/eventDetails/event-summary";
import EventLogistics from "../../components/eventDetails/event-logistics";
import EventContent from "../../components/eventDetails/event-content";

function EventDetailPage() {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return <h1>Event not found!</h1>;
	}

	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				image={event.image}
				imageAlt={event.title}
				address={event.location}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
}

export default EventDetailPage;
