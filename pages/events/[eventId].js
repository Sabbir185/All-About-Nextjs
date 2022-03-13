import { Fragment } from "react";
import EventSummary from "../../components/eventDetails/event-summary";
import EventLogistics from "../../components/eventDetails/event-logistics";
import EventContent from "../../components/eventDetails/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById, getAllEvents } from "../../helpers/api-utils";

function EventDetailPage(props) {
	const event = props.selectedEvent;

	if (!event) {
		return (
			<div>
				<h1>loading..........</h1>;
			</div>
		);
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

export async function getStaticProps(context) {
	const eventId = context.params.eventId;

	const event = await getEventById(eventId);

	return {
		props: {
			selectedEvent: event,
		},
		revalidate: 30 // or more times
	};
}

export async function getStaticPaths(context) {
	const events = await getAllEvents();

	const paths = events.map((event) => ({ params: { eventId: event.id } }));

	return {
		paths: paths,
		fallback: true // or 'blocking'
	};
}
