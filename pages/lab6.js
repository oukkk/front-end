import { useState } from 'react';
import Box1 from './lab2.js';
import Box2 from './lab3.js';
import Box3 from './lab4.js';

export default function Home() {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (box) => {
    setSelectedBox(box);
  };

  const renderBoxContent = () => {
    switch (selectedBox) {
      case 'Box1':
        return <Box1 />;
      case 'Box2':
        return <Box2 />;
      case 'Box3':
        return <Box3 />;
      default:
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={titleStyle}>Oyunbilig.Ch</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <div onClick={() => handleBoxClick('Box1')} style={boxStyle}>
                1
              </div>
              <div onClick={() => handleBoxClick('Box2')} style={boxStyle}>
                2
              </div>
              <div onClick={() => handleBoxClick('Box3')} style={boxStyle}>
                3
              </div>
            </div>
          </div>
        );
    }
  };

  return <div>{renderBoxContent()}</div>;
}

const boxStyle = {
  cursor: 'pointer',
  padding: '20px',
  border: '2px solid #007BFF', 
  borderRadius: '15px',
  width: '120px',
  height: '120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor: '#F0F8FF',  
  fontSize: '30px',
  fontWeight: 'bold',
  color: '#007BFF', 
  transition: 'transform 0.3s, box-shadow 0.3s', 
};

const titleStyle = {
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  color: '#007BFF',
  fontSize: '36px',
  marginBottom: '30px',
};

const hoverStyle = {
  ':hover': {
    transform: 'scale(1.1)', 
    boxShadow: '0 4px 10px rgba(0, 123, 255, 0.3)', 
  }
};

const boxWithHoverEffect = { ...boxStyle, ...hoverStyle };
