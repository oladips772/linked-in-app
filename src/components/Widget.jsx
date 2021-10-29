import React from 'react';
import "../css/Widget.css";
import InfoIcon from "@mui/icons-material/Info";

const Widget = () => {
    return (
      <div className="widget">
        <div className="widget-top">
          <h3>LinkedIn News</h3>
          <InfoIcon className="info-icon" />
        </div>
        <div className="bottom-widget">
          <div className="widget-info">
            <h5>React.js Project</h5>
            <p>Linked-in-clone</p>
          </div>
          <div className="widget-info">
            <h5>Svelte.js Project</h5>
            <p>Poll Ninja</p>
          </div>
          <div className="widget-info">
            <h5>Vue.js Project</h5>
            <p>Insurance Website</p>
          </div>
          <div className="widget-info">
            <h5>Angular Project</h5>
            <p>Shopping Api</p>
          </div>
        </div>
      </div>
    );
}

export default Widget;
