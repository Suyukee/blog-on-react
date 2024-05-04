'use client';

import { useRouter } from 'next/navigation';
import useFetch from './use-fetch';
import Preloader from './preloader';
import { SERVER_URL } from '@/utils/constants';

export default function BlogDetailsPage({ id }) {
	const { data: blog, isPending, error } = useFetch(SERVER_URL + id);

	const router = useRouter();

	const handleDelete = async () => {
		await fetch(SERVER_URL + blog.id, {
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
					<p className="blog-details__author">Written by {blog.author}</p>
					<div className="blog-details__blog-body">{blog.body}</div>
					<button className="blog-details__delete-btn" onClick={handleDelete}>
						Delete blog
					</button>
				</article>
			)}
		</main>
	);
}
