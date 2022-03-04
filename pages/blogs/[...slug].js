import { useRouter } from "next/router";

// to catch all routes ro slug

const BlogPostsPage = () => {
	const router = useRouter();

	console.log(router.query);
	console.log(router.query.slug[0]);

	// slug: (2) ['2022', '02']
	// you can you access this value to query data from database
	// router.query.slug[0]
	// router.query.slug[1]

	return (
		<div>
			<h1>The blog posts</h1>
		</div>
	);
};

export default BlogPostsPage;
