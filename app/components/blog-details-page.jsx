'use client';

import { useRouter } from 'next/navigation';
import useFetch from './use-fetch';

const BlogDetailsPage = ({ id }) => {
	const {
		data: blog,
		isPending,
		error,
	} = useFetch('https://blog-on-react-data.onrender.com/blogs/' + id);
	const router = useRouter();

	const handleDelete = () => {
		fetch('https://blog-on-react-data.onrender.com/blogs/' + blog.id, {
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
