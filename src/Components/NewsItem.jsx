
import image from '../assets/news.png'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
        alt={title || "News thumbnail"}
      />
      <div className="card-body">
        <h3 className="card-title">
          {title ? title.slice(0,50) : "Untitled"}
        </h3>
        <h5 className="card-text">
          {description ? description.slice(0, 80) : "No description available."}
        </h5>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
