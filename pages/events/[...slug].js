import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import { getFilteredEvents } from "../../data/dummy-data";
import { Fragment } from "react";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage() {
	const router = useRouter();

	const filteredData = router.query.slug;

	if (!filteredData) {
		return <p className="center">Loading...</p>;
	}

	const filteredYear = filteredData[0];
	const filteredMonth = filteredData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (
		isNaN(numYear) ||
		isNaN(numMonth) ||
		numMonth < 1 ||
		numMonth > 12 ||
		numYear < 2020 ||
		numYear > 2030
	) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>Invalid! Please adjust your values!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	const filteredEvents = getFilteredEvents({
		year: numYear,
		month: numMonth,
	});

	if (!filteredEvents || filteredEvents.length == 0) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>No evens found for the chosen filtered!</p>
				</ErrorAlert>
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	const date = new Date(numYear, numMonth - 1);

	return (
		<div>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</div>
	);
}

export default FilteredEventsPage;
