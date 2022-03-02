import { useRouter } from "next/router";

function ClientProjectPage() {
	const router = useRouter();
	console.log(router.query);

	// function loadProjectHandler() {
	// 	// data loading...
	// 	router.push("/clients/sabbir/projectA");
	// }

  // alternative
	function loadProjectHandler() {
		// data loading...
		router.push({
			pathname: "/clients/[id]/[clientprojectid]",
			query: { id: "motiur", clientprojectid: "project1" },
		});
	}

	return (
		<div>
			<h1>The project of a given client</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
}

export default ClientProjectPage;
