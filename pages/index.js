import Link from "next/link";

function HomePage() {
	return (
		<div>
			<h1 className="bg-red-500 text-center">Welcome Nextjs World!</h1>

			<ul>
				<li>
					<Link href="/portfolio">Portfolio</Link>
				</li>
				<li>
					<Link href="/clients">Clients</Link>
				</li>
			</ul>
		</div>
	);
}

export default HomePage;
