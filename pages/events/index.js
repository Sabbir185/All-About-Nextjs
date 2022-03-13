// import { getFeaturedEvents } from "../../data/dummy-data";
import { getAllEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { useRouter } from "next/router";
import {getFeaturedEvents} from '../../helpers/api-utils';


export default function AllEventsPage(props) {
	const router = useRouter();
	const events = getAllEvents();

	function findEventHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	}

	return (
		<div>
			<EventSearch onSearch={findEventHandler} />
			<EventList items={props.events} />
		</div>
	);
}


export async function getStaticProps(context) {
	const allEvents = await getFeaturedEvents();

	return {
		props: {
			events: allEvents
		},
		revalidate: 1800 // every 30 mins re-generate static state
	};
}
