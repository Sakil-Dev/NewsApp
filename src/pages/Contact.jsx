import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0" style={{
            borderRadius: "1.5rem",
            background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)"
          }}>
            <div className="card-body p-5">
              <h2 className="text-center mb-4" style={{ color: "#dd2476" }}>Contact Us</h2>
              
              <div className="row mb-4">
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <div className="p-3" style={{ background: "linear-gradient(145deg, #ff512f 0%, #dd2476 100%)", borderRadius: "1rem" }}>
                    <i className="fas fa-envelope text-white fs-3 mb-2"></i>
                    <p className="text-white mb-0">info@newsportal.com</p>
                  </div>
                </div>
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <div className="p-3" style={{ background: "linear-gradient(145deg, #ff512f 0%, #dd2476 100%)", borderRadius: "1rem" }}>
                    <i className="fas fa-phone text-white fs-3 mb-2"></i>
                    <p className="text-white mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="p-3" style={{ background: "linear-gradient(145deg, #ff512f 0%, #dd2476 100%)", borderRadius: "1rem" }}>
                    <i className="fas fa-location-dot text-white fs-3 mb-2"></i>
                    <p className="text-white mb-0">New York, NY</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "1rem", padding: "0.8rem" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "1rem", padding: "0.8rem" }}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{ borderRadius: "1rem", padding: "0.8rem" }}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-gradient px-5 py-3"
                    style={{
                      borderRadius: "2rem",
                      background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
                      color: "#fff",
                      border: "none",
                      fontWeight: "bold",
                      letterSpacing: "1px"
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
