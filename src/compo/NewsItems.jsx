const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="card border-0 news-card" style={{ 
      width: "18rem", 
      minHeight: "24rem",
      borderRadius: "1.2rem",
      transition: "transform 0.2s, box-shadow 0.2s",
      boxShadow: "0 4px 24px rgba(221,36,118,0.08)"
    }}>
      <div className="position-relative">
        <img
          src={src || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"}
          className="card-img-top"
          alt="news"
          style={{ 
            height: "180px", 
            objectFit: "cover", 
            borderTopLeftRadius: "1.2rem", 
            borderTopRightRadius: "1.2rem" 
          }}
        />
        <span 
          className="position-absolute top-0 end-0 badge p-2" 
          style={{ 
            borderRadius: "0 1.2rem 0 1.2rem",
            background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "0.8rem"
          }}
        >
          NEWS
        </span>
      </div>
      <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: "180px" }}>
        <div>
          <h5 
            className="card-title fw-bold mb-2" 
            style={{ 
              color: "#222", 
              fontSize: "1.1rem",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {title || "No Title"}
          </h5>
          <p 
            className="card-text text-secondary" 
            style={{ 
              fontSize: "0.9rem",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {description || "No Description"}
          </p>
        </div>
        <a 
          href={url} 
          target="_blank" 
          rel="noreferrer" 
          className="btn btn-gradient w-100 mt-3"
          style={{
            background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "2rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            padding: "0.5rem 1rem",
            fontSize: "0.9rem",
            boxShadow: "0 2px 8px rgba(221,36,118,0.08)"
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
