import Button from "../ui/button";
import AddressIcon from "../icon/address-icon";
import ArrowIcon from "../icon/arrow-icon";
import DateIcon from "../icon/date-icon";
import classes from "./event-item.module.css";

function EventItem(props) {
	const { id, title, location, date, image } = props;

	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const formattedAddress = location.replace(", ", "\n");

	const exploreID = `/events/${id}`;

	return (
		<li className={classes.item}>
			<img src={`/` + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{humanReadableDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={exploreID}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<ArrowIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;