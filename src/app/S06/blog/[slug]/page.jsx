import { posts } from "../blogs";

export async function getStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostDetail({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </>
  );
}
