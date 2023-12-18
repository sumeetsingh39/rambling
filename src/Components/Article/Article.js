import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import parse from "html-react-parser";
import "./Article.css";

const Article = () => {
  const { id } = useParams();
  const blog = data.find((blog) => blog.id === id);

  if (blog) {
    return (
      <div className="article">
        <img src={blog.image} alt="blog image" />
        <div className="article-content">
          <h1>{blog.blog_title}</h1>
          <div className="blog-meta">
            <span>{blog.author_name}</span>
            <hr />
            <span>{blog.publish_date}</span>
          </div>
          <p className="article-text">{parse(blog.blog_content)}</p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h2>Blog not available</h2>
        <Link to="/">Go home</Link>
      </>
    );
  }
};

export default Article;
