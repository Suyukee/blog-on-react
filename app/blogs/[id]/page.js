import BlogDetailsPage from '@/app/components/blog-details-page';
import Header from '@/app/components/header';

export default function BlogDetails({ params }) {
	return (
		<div className="wrapper">
			<Header />
			<BlogDetailsPage id={params.id} />
		</div>
	);
}
