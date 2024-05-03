'use client';

import { useRouter } from 'next/navigation';
import useFetch from './use-fetch';
import Preloader from './preloader';

const BlogDetailsPage = ({ id }) => {
	const {
		data: blog,
		isPending,
		error,
	} = useFetch('https://blog-on-react-data.onrender.com/blogs/' + id);

	const router = useRouter();

	const handleDelete = async () => {
		await fetch('https://blog-on-react-data.onrender.com/blogs/' + blog.id, {
			method: 'DELETE',
		});
		router.push('/');
	};

	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isPending && <Preloader />}
			{blog && (
				<article className="content__blog-details">
					<h2 className="blog-details__blog-title">{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div className="blog-details__blog-body">{blog.body}</div>
					<button className="blog-details__delete-btn" onClick={handleDelete}>
						Delete blog
					</button>
				</article>
			)}
		</main>
	);
};

export default BlogDetailsPage;
