import { useEffect, useState } from 'react';

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url);
				if (!res.ok) {
					throw Error('Could not fetch the data for that resourse');
				}
				const data = await res.json();
				setData(data);
				setError(null);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsPending(false);
			}
		};
		fetchData();
	}, []);

	return { data, isPending, error };
}
