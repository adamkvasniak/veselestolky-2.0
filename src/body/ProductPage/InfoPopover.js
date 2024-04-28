import React, { useState, useRef } from 'react';

const InfoPopover = ({ infoText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" fill="green" />
          <text x="50%" y="50%" textAnchor="middle" fill="white" fontSize="12px" dy=".3em">
            i
          </text>
        </svg>
      </span>
      {isVisible && (
        <div
          ref={popoverRef}
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            
            transform: 'translateX(-50%)',
            backgroundColor: '#9ABDE8',
            color: 'white',
            borderRadius: '4px',
            padding: '18px',
            zIndex: 1000,
          }}
        >
          {infoText}
        </div>
      )}
    </div>
  );
};

export default InfoPopover;
