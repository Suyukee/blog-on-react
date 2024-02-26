const BlogList = ({ blogs }) => {
	return (
		<article>
			<h2>All blogs</h2>
			{blogs.map((blog) => (
				<section className="blog-preview" key={blog.id}>
					<h3>{blog.title}</h3>
					<p>Written by {blog.author}</p>
				</section>
			))}
		</article>
	);
};

export default BlogList;
