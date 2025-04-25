import React from 'react';

function StoreLocator() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Column: Location & Search */}
        <div className="col-md-4 bg-light p-4">
          <h3 className="mb-3">Your location</h3>
          
          {/* Location Input & Stores Count */}
          <div className="d-flex align-items-center mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="USA"
              aria-label="Location"
            />
            <span className="ms-3">49 Stores</span>
          </div>

          {/* Button */}
          <button className="btn btn-primary w-100 mb-3">
            Use my Location
          </button>

          {/* Search Results */}
          <p className="text-muted mb-0">No results found</p>
        </div>

        {/* Right Column: Map */}
        <div className="col-md-8 p-0">
          {/* Embed a Google Map (or any other map iframe) */}
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151..." 
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default StoreLocator;
