import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-5 mx-3 mb-3" style={{ 
      background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
      borderRadius: "2rem",
      padding: "3rem 0 2rem",
      boxShadow: "0 -4px 24px rgba(221,36,118,0.08)"
    }}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="pe-lg-5">
              <h5 className="text-white mb-3">News Portal</h5>
              <p className="text-white-50 mb-3">
                Your trusted source for the latest news and updates from around the world. 
                Stay informed with our comprehensive coverage.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="text-white hover-scale">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover-scale">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white hover-scale">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover-scale">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none hover-white">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white-50 text-decoration-none hover-white">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white-50 text-decoration-none hover-white">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white mb-3">Categories</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">Technology</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">Business</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">Entertainment</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none hover-white">Sports</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h6 className="text-white mb-3">Newsletter</h6>
            <p className="text-white-50 mb-3">Subscribe to our newsletter for daily news updates.</p>
            <form className="mb-3">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email"
                  style={{
                    borderRadius: "2rem 0 0 2rem",
                    border: "none",
                    padding: "0.6rem 1.2rem"
                  }}
                />
                <button 
                  className="btn btn-light" 
                  type="submit"
                  style={{
                    borderRadius: "0 2rem 2rem 0",
                    padding: "0.6rem 1.2rem"
                  }}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="mt-4 mb-3" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white-50 mb-0">
              © {currentYear} News Portal. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-white-50 text-decoration-none hover-white">Terms</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-white-50 text-decoration-none hover-white">Privacy</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text-white-50 text-decoration-none hover-white">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
