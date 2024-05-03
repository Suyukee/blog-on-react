'use client';

import BlogList from './blog-list';
import Preloader from './preloader';
import useFetch from './use-fetch';

const HomePage = () => {
	const {
		data: blogs,
		isPending,
		error,
	} = useFetch('https://blog-on-react-data.onrender.com/blogs');
	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isPending && <Preloader />}
			{blogs && <BlogList blogs={blogs} />}
		</main>
	);
};

export default HomePage;
