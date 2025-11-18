import BlogPostList from "./REACT_CHALLENGE_1/BlogPostList.jsx";

function App() {
  const posts = [
    {
      id: "1",
      title: "Getting Started with React",
      summary: "Learn the basics of React and build your first application.",
      date: "2023-01-01",
      url: "/posts/1",
    },
    {
      id: "2",
      title: "CSS Grid vs Flexbox",
      summary: "Compare two powerful layout systems in CSS.",
      date: "2023-02-15",
      url: "/posts/2",
    },
    {
      id: "3",
      title: "Accessibility in Web Development",
      summary:
        "Tips for making your web applications more accessible to all users.",
      date: "2023-03-10",
      url: "/posts/3",
    },
  ];

  return (
    <main>
      <h1>Blog Posts</h1>
      <BlogPostList posts={posts} />
    </main>
  );
}

export default App;
