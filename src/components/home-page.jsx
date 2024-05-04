'use client';

import BlogList from './blog-list';
import Preloader from './preloader';
import useFetch from './use-fetch';
import { SERVER_URL } from '@/utils/constants';

export default function HomePage() {
	const { data: blogs, isPending, error } = useFetch(SERVER_URL);
	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isPending && <Preloader />}
			{blogs && <BlogList blogs={blogs} />}
		</main>
	);
}
