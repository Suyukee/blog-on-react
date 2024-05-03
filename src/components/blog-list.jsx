const BlogList = ({ blogs }) => {
	return (
		<article>
			<h2>All blogs</h2>
			{blogs.map((blog) => (
				<section className="blog-preview" key={blog.id}>
					<a href={`/blogs/${blog.id}`}>
						<h3 className="blog-preview__blog-title">{blog.title}</h3>
						<p>Written by {blog.author}</p>
					</a>
				</section>
			))}
		</article>
	);
};

export default BlogList;
