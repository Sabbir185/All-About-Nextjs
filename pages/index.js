import fs from "fs/promises";
import path from "path";

function HomePage(props) {
	const { products } = props;

	return (
		<div>
			{products?.map((product) => (
				<li key={product.id}>{product.title}</li>
			))}
		</div>
	);
}

export async function getStaticProps(context) {
	const filePath = path.join(process.cwd(), "data", "dummy-data.json");
	const jsonData = await fs.readFile(filePath);
	const data = JSON.parse(jsonData);

	// use case of redirect
	if (!data) {
		return {
			redirect: {
				destination: "/something-page",
			},
		};
	}

	// use case of notFound
	if(data.products.length ===0 ) {
		return {
			notFound: true
		}
	}

	return {
		props: {
			products: data.products,
		},
		revalidate: 10,
		// auto re-render / load data every 10 seconds helps for production mode
		// some other special properties
		// redirect: '/something-page',
		// notFound: true // or false
	};
}

export default HomePage;
