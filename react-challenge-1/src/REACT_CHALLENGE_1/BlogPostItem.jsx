import { Link } from "react-router-dom";
import styles from "./BlogPostItem.module.css";

export default function BlogPostItem({ title, summary, date, url }) {
  const [year, month, day] = date.split("-").map(Number);
  const jsDate = new Date(year, month - 1, day);

  const formattedDate = jsDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.blogPostItem}>
      <Link to={url} className={styles.titleLink}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <p className={styles.summary}>{summary}</p>
      <p className={styles.date}>Published on {formattedDate}</p>
    </div>
  );
}

