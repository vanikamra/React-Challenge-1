// App.jsx

import { Routes, Route } from "react-router-dom";
import BlogPostList from "./REACT_CHALLENGE_1/BlogPostList.jsx";
import BlogPostDetail from "./REACT_CHALLENGE_1/BlogPostDetail.jsx";
import { useParams } from "react-router-dom";

function App() {
  const posts = [
    {
      id: "1",
      title: "Getting Started with React",
      summary: "Learn the basics of React and build your first application.",
      content: `
        <p>React makes it easy to build interactive UIs using components.</p>
        <p>In this post, we’ll explore how to break your UI into reusable pieces.</p>
        <p><strong>Key ideas:</strong> components, props, and state.</p>
      `,
      author: "Vani Kamra",
      date: "2023-01-01",
      url: "/posts/1",
    },
    {
      id: "2",
      title: "CSS Grid vs Flexbox",
      summary: "Compare two powerful layout systems in modern CSS.",
      content: `
        <p>CSS Grid is great for two-dimensional layouts (rows + columns).</p>
        <p>Flexbox is ideal for one-dimensional layouts (single row or column).</p>
        <p>In this post, we'll see when to use each one.</p>
      `,
      author: "Vani Kamra",
      date: "2023-02-15",
      url: "/posts/2",
    },
    {
      id: "3",
      title: "Accessibility in Web Development",
      summary: "Tips for making your web applications more accessible.",
      content: `
        <p>Accessible web apps work better for everyone, not just people
        with disabilities.</p>
        <p>We’ll talk about semantic HTML, ARIA labels, and keyboard navigation.</p>
      `,
      author: "Vani Kamra",
      date: "2023-03-10",
      url: "/posts/3",
    },
  ];

  
  function BlogPostDetailRoute() {
    const { id } = useParams();                
    const post = posts.find((p) => p.id === id);

    if (!post) {
      return <p>Blog post not found.</p>;
    }

    return (
      <BlogPostDetail
        title={post.title}
        content={post.content}
        author={post.author}
        date={post.date}
      />
    );
  }

  //Routes: list page + detail page
  return (
    <Routes>
      {/* Home page: shows the list of posts */}
      <Route path="/" element={<BlogPostList posts={posts} />} />

      {/* Detail page: shows one full post*/}
      <Route path="/posts/:id" element={<BlogPostDetailRoute />} />
    </Routes>
  );
}

export default App;
