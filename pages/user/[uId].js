const UserID = (props) => {

	return (
		<div>
			<h3>User - {props.id}</h3>
		</div>
	);
};

export default UserID;


export async function getServerSideProps(context) {

    const {params} = context;
    const userId = params.uId;
    
    return {
        props: {
            id: userId,
        }
    }
}

// No need getServerSidePaths, because it dynamically loaded, its a Next.js default feature