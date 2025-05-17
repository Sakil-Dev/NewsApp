import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0" style={{
            borderRadius: "1.5rem",
            background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)"
          }}>
            <div className="card-body p-5">
              <h2 className="text-center mb-4" style={{ color: "#dd2476" }}>About News Portal</h2>
              
              <div className="mb-4">
                <h5 className="fw-bold" style={{ color: "#ff512f" }}>Our Mission</h5>
                <p>
                  News Portal is dedicated to delivering real-time, accurate, and comprehensive news coverage from around the globe. 
                  We believe in keeping our readers well-informed with the latest developments across various domains.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold" style={{ color: "#ff512f" }}>What We Offer</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">✨ Real-time news updates</li>
                  <li className="mb-2">📱 Multi-platform accessibility</li>
                  <li className="mb-2">🌐 Global news coverage</li>
                  <li className="mb-2">🎯 Customized news categories</li>
                  <li className="mb-2">🔍 Advanced search capabilities</li>
                </ul>
              </div>

              <div className="text-center mt-4">
                <p className="text-muted">
                  Powered by NewsAPI | Built with React and Bootstrap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
