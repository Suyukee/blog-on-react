import BlogDetailsPage from '@/components/blog-details-page';
import Header from '@/components/header';

export default function BlogDetails({ params }) {
	return (
		<div className="wrapper">
			<Header />
			<BlogDetailsPage id={params.id} />
		</div>
	);
}
