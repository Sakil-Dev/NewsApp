import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "general",
    "business",
    "technology",
    "sports",
    "entertainment",
    "health",
    "science",
  ];

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async (search = "") => {
    setLoading(true);
    setError(null);
    try {
      const baseUrl = "https://newsapi.org/v2/";
      const endpoint = search ? "everything" : "top-headlines";
      const queryParams = search
        ? `q=${encodeURIComponent(search)}`
        : `country=us&category=${category}`;

      const url = `${baseUrl}${endpoint}?${queryParams}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch news");
      const data = await response.json();
      setArticles(data.articles || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchNews(searchQuery);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setSearchQuery(""); // Clear search when changing category
    setCategory(newCategory);
  };

  return (
    <div className="container my-4">
      <div className="row mb-4">
        <div className="col-12">
          <form onSubmit={handleSearch} className="d-flex gap-2 mb-3">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search for news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  borderRadius: "2rem 0 0 2rem",
                  padding: "0.8rem 1.5rem",
                  border: "2px solid #eee",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              />
              <button
                type="submit"
                className="btn btn-gradient d-flex align-items-center gap-2"
                style={{
                  minWidth: "130px",
                  borderRadius: "0 2rem 2rem 0",
                  background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                  padding: "0.8rem 1.5rem",
                  color: "#fff",
                  border: "none",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span>Searching...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-search"></i>
                    <span>Search</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn ${
                  category === cat ? "btn-gradient" : "btn-outline-secondary"
                }`}
                onClick={() => handleCategoryChange(cat)}
                style={{
                  borderRadius: "2rem",
                  padding: "0.6rem 1.2rem",
                  textTransform: "capitalize",
                  transition: "all 0.3s ease",
                  ...(category === cat
                    ? {
                        background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                        border: "none",
                        color: "#fff",
                        boxShadow: "0 4px 15px rgba(221,36,118,0.2)",
                      }
                    : {
                        border: "2px solid #dee2e6",
                        color: "#6c757d",
                        "&:hover": {
                          border: "2px solid #dd2476",
                          color: "#dd2476",
                        },
                      }),
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-center mb-4" style={{ color: "#dd2476" }}>
        {searchQuery ? (
          <span>
            Search Results for "<span style={{ color: "#ff512f" }}>{searchQuery}</span>"
          </span>
        ) : (
          <span>
            Latest{" "}
            <span style={{ color: "#ff512f" }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>{" "}
            News
          </span>
        )}
      </h2>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border" role="status" style={{ color: "#dd2476", width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3" style={{ color: "#6c757d" }}>Loading news...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          <i className="fas fa-exclamation-circle me-2"></i>
          {error}
        </div>
      )}

      <div className="row">
        {!loading && !error && articles.length === 0 && (
          <div className="col-12 text-center">
            <div className="alert alert-info">
              <i className="fas fa-info-circle me-2"></i>
              No news found. Try a different search or category.
            </div>
          </div>
        )}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center">
          {articles.map((news, index) => (
            <div key={index} className="col d-flex justify-content-center">
              <NewsItems
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsBoard;
