'use client';

import { useRouter } from 'next/navigation';
import useFetch from './use-fetch';

const BlogDetailsPage = ({ id }) => {
	const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
	const router = useRouter();

	const handleDelete = () => {
		fetch('http://localhost:8000/blogs/' + blog.id, {
			method: 'DELETE',
		}).then(() => {
			router.push('/');
		});
	};

	return (
		<main className="content blog-details">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleDelete}>Delete blog</button>
				</article>
			)}
		</main>
	);
};

export default BlogDetailsPage;
