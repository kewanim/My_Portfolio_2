import React from "react";
import "./BlogCard.scss";

export default function BlogCard({ blog = {}, isDark }) {
  // Handle missing blog data with fallback
  if (!blog || Object.keys(blog).length === 0) {
    return (
      <div className="blog-container-placeholder">
        <h3 className="blog-placeholder-text">No achievements available</h3>
      </div>
    );
  }

  // Function to open URL in a new tab
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url, blog.title)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title || "Untitled Achievement"}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description || "No description available."}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}