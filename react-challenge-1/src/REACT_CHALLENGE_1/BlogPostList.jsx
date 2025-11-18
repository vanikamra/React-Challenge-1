import BlogPostItem from "./BlogPostItem.jsx";
import styles from "./BlogPostList.module.css";

export default function BlogPostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className={styles.blogPostList}>
      {posts.map((post) => (
        <BlogPostItem
          key={post.id}
          title={post.title}
          summary={post.summary}
          date={post.date}
          url={post.url}
        />
      ))}
    </div>
  );
}

