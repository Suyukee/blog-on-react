'use client';

import useFetch from './use-fetch';

const BlogDetailsPage = ({ id }) => {
	const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
	return (
		<main className="content blog-details">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
				</article>
			)}
		</main>
	);
};

export default BlogDetailsPage;
