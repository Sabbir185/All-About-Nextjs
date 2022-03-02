import Link from "next/link";

const ClientPage = () => {
	const clients = [
		{ id: "sabbir", name: "Sabbir Ahmmed" },
		{ id: "motiur", name: "Motiur Bahadur" },
	];

	return (
		<div>
			<h1>This is Client Page</h1>

			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						<Link href={`/clients/${client.id}`}>
							{client.name}
						</Link>
					</li>
				))}
			</ul>

			<br />
			<hr />
			<br />
			{/* altermnative way to define route */}
			<ul>
				{clients.map((client) => (
					<li key={client.id}>
						<Link
							href={{
								pathname: "clients/[id]",
								query: { id: client.id },
							}}
						>
							{client.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ClientPage;
