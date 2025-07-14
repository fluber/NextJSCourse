export default function BlogPostPage({params}) {
  return (
    <main>
      <h1>Blog Post Details: {params.slug} </h1>
      <p>This is where the blog post content will go.</p>
    </main>
  );
}