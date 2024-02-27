'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NewBlogPage = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('mario');
	const [isPending, setIsPending] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsPending(true);

		fetch('http://localhost:8000/blogs/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			setIsPending(false);
			router.push('/');
		});
	};

	return (
		<main className="content">
			<article className="create">
				<h2>Add a new blog</h2>
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
						<option value="vova">Vova</option>
						<option value="nastya">Nastya</option>
					</select>
					{!isPending && <button>Add blog</button>}
					{isPending && <button disabled>Additing blog...</button>}
				</form>
			</article>
		</main>
	);
};

export default NewBlogPage;
