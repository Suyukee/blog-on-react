'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SERVER_URL } from '@/utils/constants';

export default function NewBlogPage() {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Vova');
	const [isPending, setIsPending] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const blog = { title, body, author };
		setIsPending(true);

		try {
			await fetch(SERVER_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(blog),
			});
		} finally {
			setIsPending(false);
			router.push('/');
		}
	};

	return (
		<main className="content">
			<article className="content__create">
				<h2 className="create__title">Add a new blog</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor="title">Blog title:</label>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						id="title"
						required
					/>
					<label htmlFor="body">Blog body:</label>
					<textarea
						value={body}
						onChange={(e) => setBody(e.target.value)}
						type="text"
						id="body"
						required
					/>
					<label htmlFor="author">Blog title:</label>
					<select value={author} onChange={(e) => setAuthor(e.target.value)} id="author">
						<option value="Vova">Vova</option>
						<option value="Nastya">Nastya</option>
					</select>
					{!isPending && <button>Add blog</button>}
					{isPending && <button disabled>Additing blog...</button>}
				</form>
			</article>
		</main>
	);
}
