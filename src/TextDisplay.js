import React from 'react';
import './TextDisplay.css';

function TextDisplay({ text }) {
  return (
    <div className='Text-display'>
        {text}
    </div>
  );
}

export default TextDisplay;
