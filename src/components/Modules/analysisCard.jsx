import React from 'react'
import '../Modules/analysisCard.css';

const analysisCard = ({ children, title }) => {
    return (
        <div className="analysis-card">
          <div className="analysis-card-header">
            <h2>{title}</h2>
          </div>
          <div className="analysis-card-body">
            {children}
          </div>
        </div>
      );
}

export default analysisCard