import classes from "./event-logistics.module.css";
import LogisticsItem from "./logistics-item";
import DateIcon from "../icon/date-icon";
import AddressIcon from "../icon/address-icon";


const EventLogistics = (props) => {
	const { date, address, image, imageAlt } = props;

	const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
	const addressText = address.replace(", ", "\n");

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<img src={`/${image}`} alt={imageAlt} />
			</div>
			<ul>
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
};

export default EventLogistics;
