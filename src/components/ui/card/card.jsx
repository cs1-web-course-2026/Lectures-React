import React from 'react';
import './card.css';

export const Card = ({ title, badge, className = '', headerRight = null, children }) => {
  return (
    <div className={`uiCard ${className}`}>
      {(title || badge || headerRight) && (
        <div className="uiCardHeading">
          {title && <h4 style={{ margin: 0 }}>{title}</h4>}
          {badge && <span className="uiBadge">{badge}</span>}
          {headerRight}
        </div>
      )}
      {children}
    </div>
  );
};


