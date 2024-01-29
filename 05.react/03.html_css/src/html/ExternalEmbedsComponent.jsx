import React from 'react';
import '../css/ExternalEmbedsComponent.css';

function ExternalEmbedsComponent() {
  return (
    <div className="external-embeds">
      {/* Embedding an iframe */}
      <iframe
        src="https://www.codinggita.com"
        title="Iframe Example"
        width="350"
        height="200"
      ></iframe>

      {/* Embedding a map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
        title="Google Maps"
        width="300"
        height="200"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ExternalEmbedsComponent;
