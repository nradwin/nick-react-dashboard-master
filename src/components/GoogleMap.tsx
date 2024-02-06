const GoogleMap = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=Ecuador&amp;t=&amp;z=7&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          style={{ width: '100%', height: '100%', borderRadius: '16px' }}
        ></iframe>
        <style>
          {`
            .mapouter {
              position: relative;
              height: 440px;
              width: 100%;
              background: transparent;
              border-radius: 16px; /* Add this line for border radius */
            }

            .mapouter a {
              color: #fff !important;
              position: absolute !important;
              top: 0 !important;
              z-index: 0 !important;
            }

            .gmap_canvas {
              overflow: hidden;
              height: 440px;
              width: 100%;
            }

            .gmap_canvas iframe {
              position: relative;
              z-index: 2;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default GoogleMap;
