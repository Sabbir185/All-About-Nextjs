import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
	const router = useRouter();
	console.log(router.query);

	//   http://localhost:3000/clients/sabbir/project123
	// {id: 'sabbir', clientprojectid: 'project123'}

	return (
		<div>
			<h1>
				The project page for a specific project for a selected client
			</h1>
		</div>
	);
};

export default SelectedClientProjectPage;
