import React from "react";
import styles from "./BlogPostDetail.module.css";

export default function BlogPostDetail({ title, content, author, date }) {
 
  if (!title || !content || !author || !date) { 
    return <p>Blog post not found.</p>; 
  }

  const formattedDate = new Date(date).toLocaleDateString("en-US", { // Format date
    month: "long", // Full month name //long means January
    day: "numeric", // Day of the month //numeric means 1-31
    year: "numeric", // Numeric year //numeric means 2024
  });


  return (
    <div className={styles.blogPostDetail}> {/* Container div with CSS class */}
      <h1 className={styles.title}>{title}</h1> {/* Blog post title */}
      <p className={styles.author}>By {author}</p> {/* Author name */}
      <p className={styles.date}>Published on {formattedDate}</p> {/* Formatted publication date */}

    
      <div
        className={styles.content} 
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
}
